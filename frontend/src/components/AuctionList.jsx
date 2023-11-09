// src/components/AuctionList.js

import React, { useState, useEffect } from 'react';
import './AuctionList.css';

const AuctionList = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    // Fetch all auctions from your backend
    const fetchAuctions = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auctions');
        const data = await response.json();

        setAuctions(data.auctions);
      } catch (error) {
        console.error('Error fetching auctions:', error);
      }
    };

    fetchAuctions();
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Auction List</h2>
      <ul>
        {auctions.map((auction) => (
          <li key={auction._id}>
            <strong>{auction.title}</strong> - {auction.description}, Starting Bid: ${auction.startingBid}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuctionList;
