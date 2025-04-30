const express = require('express');
const router = express.Router();
const sellingHistoryController = require('../controllers/sellingHistoryController');

// Selling History Routes
router.post('/add-selling-history', sellingHistoryController.createSellingHistory);
router.get('/get-all-selling-history', sellingHistoryController.getAllSellingHistory);

module.exports = router;
