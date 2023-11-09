// src/App.js

import React from 'react';
import AuctionList from './components/AuctionList';
import CreateAuctionForm from './components/CreateAuctionForm';
import Auctions from './components/AuctionList';

const App = () => {
  return (
    <div>
      <h1>Auction App</h1>
      {/* <CreateAuctionForm /> */}
      {/* <Auctions /> */}
      <AuctionList />
    </div>
  );
};

export default App;
