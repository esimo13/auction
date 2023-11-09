// controllers/auctionController.js

const Auction = require('../models/auctionModel');

// Example controller methods
const createAuction = async (req, res) => {
  try {
    const { title, description, startingBid, endTime } = req.body;
    //const createdBy = req.user._id; // Assuming you use authentication and have user information in req.user

    const auction = new Auction({
      title,
      description,
      startingBid,
      endTime,
      //createdBy,
    });

    await auction.save();

    res.status(201).json({ auction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Add more controller methods for updating, deleting, fetching auctions, etc.

module.exports = {
  createAuction,
  // Add other methods here
};
