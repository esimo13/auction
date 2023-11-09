// routes/auctionRoutes.js

const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');

// Example route for creating an auction
router.post('/create', auctionController.createAuction);

// Add more routes for updating, deleting, fetching auctions, etc.
// Get information about a specific auction by ID
router.get('/:auctionId', auctionController.getAuctionById);

// Get all auctions
router.get('/', auctionController.getAllAuctions);

module.exports = router;
