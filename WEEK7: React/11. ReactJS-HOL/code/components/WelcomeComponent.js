import React from 'react';

const WelcomeComponent = () => {
  // Function that takes "welcome" as argument
  const sayWelcome = (message) => {
    alert(`Welcome! ${message}`);
  };

  return (
    <div className="component-container">
      <h3 className="component-title">2. Welcome Component</h3>
      <p>This button invokes a function that takes "welcome" as an argument:</p>
      <button 
        onClick={() => sayWelcome("Thanks for visiting our React Event Examples App!")} 
        className="button"
      >
        Say Welcome
      </button>
    </div>
  );
};

export default WelcomeComponent;