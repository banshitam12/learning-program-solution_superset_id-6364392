import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  // Handle input change event
  const handleInputChange = (event) => {
    setRupees(event.target.value);
  };

  // Handle submit event for currency conversion
  const handleSubmit = () => {
    if (rupees && !isNaN(rupees) && parseFloat(rupees) > 0) {
      // Conversion rate: 1 EUR = approximately 90 INR
      const conversionRate = 90;
      const convertedEuros = (parseFloat(rupees) / conversionRate).toFixed(2);
      setEuros(convertedEuros);
    } else {
      alert("Please enter a valid positive number for Indian Rupees");
      setEuros('');
    }
  };

  // Clear the form
  const handleClear = () => {
    setRupees('');
    setEuros('');
  };

  return (
    <div className="component-container">
      <h3 className="component-title">4. Currency Converter (INR to EUR)</h3>
      <p>Convert Indian Rupees to Euros using event handling:</p>
      
      <div style={{ margin: '15px 0' }}>
        <label htmlFor="rupees">Indian Rupees (₹): </label>
        <input
          type="number"
          id="rupees"
          value={rupees}
          onChange={handleInputChange}
          placeholder="Enter amount in rupees"
          className="input-field"
          min="0"
          step="0.01"
        />
      </div>
      
      <div>
        <button onClick={handleSubmit} className="button">
          Convert to EUR
        </button>
        <button onClick={handleClear} className="button" style={{ marginLeft: '10px' }}>
          Clear
        </button>
      </div>
      
      {euros && (
        <div className="result-display">
          <strong>Conversion Result:</strong><br />
          ₹{rupees} = €{euros}
          <br />
          <small>(Exchange Rate: 1 EUR = 90 INR)</small>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;