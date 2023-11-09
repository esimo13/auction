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

// Get all auctions
const getAllAuctions = async (req, res) => {
  try {
    // Fetch all auctions from the database
    const auctions = await Auction.find();

    // Return the list of auctions in the response
    res.status(200).json({ auctions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get information about a specific auction by ID
const getAuctionById = async (req, res) => {
  try {
    const { auctionId } = req.params;

    // Find the auction by ID in the database
    const auction = await Auction.findById(auctionId);

    if (!auction) {
      return res.status(404).json({ error: 'Auction not found' });
    }

    // Return the auction information in the response
    res.status(200).json({ auction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  createAuction,
  // Add other methods here
  getAllAuctions,
  getAuctionById,

};
