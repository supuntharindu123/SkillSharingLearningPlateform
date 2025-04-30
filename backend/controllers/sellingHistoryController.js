const SellingHistory = require('../models/SellingHistory');

const createSellingHistory = async (productId, quantity) => {
  try {
    const newHistory = new SellingHistory({
      productId: productId,
      quantity: quantity,
    });

    await newHistory.save(); 
    console.log('Selling history record created:', newHistory);
  } catch (error) {
    console.error('Error creating selling history:', error);
  }
};

// Method to get all selling history records
const getAllSellingHistory = async (req, res) => {
  try {
    
    const sellingHistoryRecords = await SellingHistory.find().limit(10); 

    res.json(sellingHistoryRecords); 
  } catch (error) {
    console.error('Error fetching selling history:', error);
    res.status(500).json({ error: 'Failed to fetch selling history' }); 
  }
};


  module.exports = {
    createSellingHistory,
    getAllSellingHistory,
  };