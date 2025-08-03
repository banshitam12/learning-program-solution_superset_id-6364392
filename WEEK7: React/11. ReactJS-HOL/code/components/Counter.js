import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Method to increment value
  const incrementValue = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Method to say hello with static message
  const sayHello = () => {
    alert("Hello! This is a static message from increment button.");
  };

  // Multiple methods handler for Increment button (calls both methods)
  const handleIncrement = () => {
    incrementValue();  // First method call
    sayHello();        // Second method call
  };

  // Decrement method
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="component-container">
      <h3 className="component-title">1. Counter Component</h3>
      <p><strong>Current Count: {count}</strong></p>
      <p>The Increment button invokes multiple methods:</p>
      <ul>
        <li>Increment the counter value</li>
        <li>Show "Hello" message</li>
      </ul>
      <button onClick={handleIncrement} className="button">
        Increment (Multiple Methods)
      </button>
      <button onClick={handleDecrement} className="button">
        Decrement
      </button>
    </div>
  );
};

export default Counter;