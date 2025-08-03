import React, { useState } from 'react';

const FlightDetails = ({ isGuest }) => {
  const [flights] = useState([
    {
      id: 1,
      from: 'New York',
      to: 'London',
      departure: '10:00 AM',
      arrival: '10:30 PM',
      price: '$599',
      duration: '7h 30m'
    },
    {
      id: 2,
      from: 'Los Angeles',
      to: 'Tokyo',
      departure: '2:15 PM',
      arrival: '6:45 PM +1',
      price: '$799',
      duration: '11h 30m'
    },
    {
      id: 3,
      from: 'Chicago',
      to: 'Paris',
      departure: '8:45 PM',
      arrival: '2:15 PM +1',
      price: '$649',
      duration: '8h 30m'
    }
  ]);

  const handleBookTicket = (flightId) => {
    alert(`Ticket booked for Flight ID: ${flightId}`);
  };

  return (
    <div className="flight-details">
      <h3>Available Flights</h3>
      
      <div className="flights-container">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <div className="flight-info">
              <h4>{flight.from} → {flight.to}</h4>
              <div className="flight-times">
                <span>Departure: {flight.departure}</span>
                <span>Arrival: {flight.arrival}</span>
                <span>Duration: {flight.duration}</span>
              </div>
              <div className="flight-price">{flight.price}</div>
            </div>
            
            {/* Conditional rendering for booking button */}
            <div className="flight-actions">
              {isGuest ? (
                <button className="disabled-btn" disabled>
                  Login to Book
                </button>
              ) : (
                <button 
                  className="book-btn"
                  onClick={() => handleBookTicket(flight.id)}
                >
                  Book Ticket
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDetails;