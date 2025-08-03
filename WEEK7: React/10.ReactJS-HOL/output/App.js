import React from 'react';
import './App.css';

function App() {
  // Create an object of office to display details
  const sampleOffice = {
    name: "Premium Business Center",
    rent: 75000,
    address: "123 Business District, Downtown"
  };

  // Create a list of office objects
  const officeSpaces = [
    {
      id: 1,
      name: "Premium Business Center",
      rent: 75000,
      address: "123 Business District, Downtown",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Modern Startup Hub",
      rent: 45000,
      address: "456 Innovation Street, Tech Park",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Executive Office Suite",
      rent: 85000,
      address: "789 Corporate Avenue, Financial District",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Creative Workspace",
      rent: 35000,
      address: "321 Artist Lane, Creative Quarter",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Luxury Corporate Center",
      rent: 120000,
      address: "555 Elite Plaza, Business Hub",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=300&h=200&fit=crop"
    }
  ];

  // Function to determine rent color based on amount
  const getRentColor = (rent) => {
    return rent < 60000 ? 'red' : 'green';
  };

  return (
    <div className="App">
      {/* Element to display the heading of the page */}
      <header className="app-header">
        <h1>Office Space Rental App</h1>
        <p>Find your perfect office space today!</p>
      </header>

      {/* Display sample office details */}
      <section className="sample-office">
        <h2>Featured Office</h2>
        <div className="office-card">
          <h3>{sampleOffice.name}</h3>
          <p><strong>Rent:</strong> <span style={{ color: getRentColor(sampleOffice.rent) }}>
            ₹{sampleOffice.rent.toLocaleString()}/month
          </span></p>
          <p><strong>Address:</strong> {sampleOffice.address}</p>
        </div>
      </section>

      {/* Loop through office space items to display more data */}
      <section className="office-listings">
        <h2>Available Office Spaces</h2>
        <div className="office-grid">
          {officeSpaces.map(office => (
            <div key={office.id} className="office-item">
              {/* Attribute to display the image of the office space */}
              <img 
                src={office.image} 
                alt={office.name}
                className="office-image"
              />
              <div className="office-details">
                <h3>{office.name}</h3>
                <p className="office-address">
                  <strong>Address:</strong> {office.address}
                </p>
                <p className="office-rent">
                  <strong>Rent:</strong> 
                  <span 
                    style={{ 
                      color: getRentColor(office.rent),
                      fontWeight: 'bold',
                      fontSize: '1.2em'
                    }}
                  >
                    ₹{office.rent.toLocaleString()}/month
                  </span>
                </p>
                <button className="contact-btn">Contact Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JavaScript expressions in JSX example */}
      <section className="statistics">
        <h2>Quick Stats</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>{officeSpaces.length}</h3>
            <p>Total Offices</p>
          </div>
          <div className="stat-item">
            <h3>₹{Math.min(...officeSpaces.map(office => office.rent)).toLocaleString()}</h3>
            <p>Starting From</p>
          </div>
          <div className="stat-item">
            <h3>₹{Math.max(...officeSpaces.map(office => office.rent)).toLocaleString()}</h3>
            <p>Premium Options</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
