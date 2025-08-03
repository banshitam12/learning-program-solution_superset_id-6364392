import React from 'react';
import FlightDetails from './FlightDetails';

const UserPage = () => {
  return (
    <div className="user-page">
      <h2>Welcome User!</h2>
      <p>You can now browse and book flight tickets.</p>
      
      <FlightDetails isGuest={false} />
    </div>
  );
};

export default UserPage;