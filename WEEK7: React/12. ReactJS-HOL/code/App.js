import React, { useState } from 'react';
import './App.css';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Ticket Booking</h1>
        
        {/* Conditional rendering for Login/Logout buttons */}
        {!isLoggedIn ? (
          <button onClick={handleLogin} className="login-btn">
            Login
          </button>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </header>

      <main>
        {/* Conditional rendering for Guest/User pages */}
        {!isLoggedIn ? (
          <GuestPage />
        ) : (
          <UserPage />
        )}
      </main>
    </div>
  );
}

export default App;
