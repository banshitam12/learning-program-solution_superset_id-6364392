import React from 'react';

const SyntheticEventComponent = () => {
  // Synthetic event handler - demonstrates React's SyntheticEvent
  const handleOnPress = (event) => {
    // 'event' is React's SyntheticEvent object
    console.log("Synthetic Event Object:", event);
    console.log("Event Type:", event.type);
    console.log("Target Element:", event.target);
    console.log("Current Target:", event.currentTarget);
    
    alert("I was clicked! Check the console for SyntheticEvent details.");
  };

  return (
    <div className="component-container">
      <h3 className="component-title">3. Synthetic Event Component</h3>
      <p>This button demonstrates React's Synthetic Event system.</p>
      <p>Click the button and check the browser console to see the SyntheticEvent object.</p>
      <button onClick={handleOnPress} className="button">
        OnPress Button (Synthetic Event)
      </button>
    </div>
  );
};

export default SyntheticEventComponent;