// routes/auctionRoutes.js

const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');

// Example route for creating an auction
router.post('/create', auctionController.createAuction);

// Add more routes for updating, deleting, fetching auctions, etc.

module.exports = router;
