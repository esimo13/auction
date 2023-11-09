// models/Auction.js

const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startingBid: {
    type: Number,
    required: true,
  },
  currentBid: {
    type: Number,
    default: 0,
  },
  endTime: {
    type: Date,
    required: true,
  },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User', // Assuming you have a User model
  //   required: true,
  // },
  // Add more fields as needed
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
