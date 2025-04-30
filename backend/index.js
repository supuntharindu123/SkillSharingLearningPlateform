const express = require('express');
const cors = require('cors'); 
const connectDB = require('./config/db');
const storeRoutes = require('./routes/storeRoutes');
const sellingHistoryRoutes = require('./routes/sellingHistoryRoutes');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); 

// Routes
app.use('/api/store', storeRoutes);
app.use('/api/sellingHistory', sellingHistoryRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
