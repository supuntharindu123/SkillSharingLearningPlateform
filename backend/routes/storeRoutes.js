const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const supplierController = require('../controllers/supplierController');

// Product Routes
router.post('/create_product', storeController.createProduct);
router.put('/update_product/:id', storeController.updateProduct);
router.get('/products/most-selling', storeController.getMostSellingProducts);
router.get('/get_all_products', storeController.getAllProducts);
router.get('/get_product/:id', storeController.getProductById);
router.delete('/delete_product/:id', storeController.deleteProduct);

// Supplier Routes
router.post('/create_supplier', supplierController.createSupplier);
router.get('/get_all_suppliers', supplierController.getAllSuppliers);
router.get('/get_supplier/:id', supplierController.getSupplierById);
router.put('/update_supplier/:id', supplierController.updateSupplier);
router.delete('/delete_supplier/:id', supplierController.deleteSupplier);

module.exports = router;