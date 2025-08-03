import React from 'react';
import FlightDetails from './FlightDetails';

const GuestPage = () => {
  return (
    <div className="guest-page">
      <h2>Welcome Guest!</h2>
      <p>Browse our available flights. Please login to book tickets.</p>
      
      <FlightDetails isGuest={true} />
    </div>
  );
};

export default GuestPage;