const Product = require('../models/Product');
const { createSellingHistory } = require('../controllers/sellingHistoryController'); 

const generateProductId = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `PROD${hours}${minutes}`;
};

exports.createProduct = async (req, res) => {
  try {
    let productId = generateProductId();
    let existingProduct = await Product.findOne({ productId });
    
    // If productId exists, generate a new one with a slight variation
    let attempt = 1;
    while (existingProduct) {
      const now = new Date();
      const seconds = now.getSeconds().toString().padStart(2, '0');
      productId = `PROD${hours}${minutes}${seconds}${attempt}`;
      existingProduct = await Product.findOne({ productId });
      attempt++;
      
      // Prevent infinite loop (unlikely case)
      if (attempt > 10) {
        throw new Error('Unable to generate unique product ID');
      }
    }

    const productData = {
      ...req.body,
      productId: productId
    };

    const product = new Product(productData);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, price, discount, quantity } = req.body;

    // Fetch the current product by ID
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Check if the quantity in the request body is less than the current stock
    if (quantity < product.quantity) {
      // Calculate the number of items sold (the difference in quantity)
      const quantitySold = product.quantity - quantity;

      // Ensure the quantitySold is valid (not negative)
      if (quantitySold < 0) {
        return res.status(400).json({ message: 'Quantity sold cannot be negative' });
      }

      // Update the product quantity after the sale (reducing the stock)
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { name, price, discount, quantity },
        { new: true }
      );

      // Create the selling history for the transaction
      await createSellingHistory(updatedProduct.productId, quantitySold); 

      // Return the updated product details
      res.json(updatedProduct);
    } else {

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { name, price, discount, quantity },
        { new: true }
      );

      // Return the updated product details
      res.json(updatedProduct);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getMostSellingProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ salesCount: -1 })
      .limit(5)
      .populate('supplier', 'name contact');
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('supplier', 'name contact');
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getExpiringProducts = async () => {
  try {
    const currentDate = new Date();
    const thirtyDaysFromNow = new Date(currentDate.setDate(currentDate.getDate() + 30));
    
    const expiringProducts = await Product.find({
      expiryDate: {
        $lte: thirtyDaysFromNow,
        $gte: new Date()
      }
    }).populate('supplier', 'name contact');
    
    return expiringProducts;
  } catch (error) {
    console.error('Error fetching expiring products:', error);
    return [];
  }
};

// New method to get product by productId
exports.getProductByProductId = async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId })
      .populate('supplier', 'name contact');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully', productId: product.productId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('supplier', 'name contact');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};