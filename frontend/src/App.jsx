// src/App.js

import React from 'react';
import AuctionList from './components/AuctionList';
import CreateAuctionForm from './components/CreateAuctionForm';

const App = () => {
  return (
    <div>
      <h1>Auction App</h1>
      <CreateAuctionForm />
      <AuctionList />
    </div>
  );
};

export default App;
