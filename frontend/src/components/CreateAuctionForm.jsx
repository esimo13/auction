// src/components/CreateAuctionForm.js

import React, { useState } from 'react';

const CreateAuctionForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startingBid: '',
    endTime: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can perform validation on the form data here before sending it to the backend

    try {
      const response = await fetch('http://localhost:3000/api/auctions/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Auction created successfully!');
        // Handle successful response, e.g., redirect to a different page
      } else {
        console.error('Failed to create auction');
        // Handle error response
      }
    } catch (error) {
      console.error('Error creating auction:', error);
      // Handle network or other errors
    }
  };

  return (
    <div>
      <h2>Create Auction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />
        <label>
          Starting Bid:
          <input type="number" name="startingBid" value={formData.startingBid} onChange={handleChange} />
        </label>
        <br />
        <label>
          End Time:
          <input type="datetime-local" name="endTime" value={formData.endTime} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Create Auction</button>
      </form>
    </div>
  );
};

export default CreateAuctionForm;
