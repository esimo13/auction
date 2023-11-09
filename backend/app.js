// app.js or index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auctionRoutes = require('./routes/auctionRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/auctionApp', { useNewUrlParser: true, useUnifiedTopology: true, });

// Middleware
app.use(bodyParser.json());

// Use auction routes
app.use('/api/auctions', auctionRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
