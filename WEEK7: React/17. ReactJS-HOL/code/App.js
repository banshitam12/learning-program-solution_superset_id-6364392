import React from 'react';
import './App.css';
import Getuser from './components/Getuser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetch User App</h1>
        <Getuser />
      </header>
    </div>
  );
}

export default App;
