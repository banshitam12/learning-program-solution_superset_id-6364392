import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';
import './App.css';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cricket App</h1>
        <button onClick={() => setFlag(!flag)}>
          Switch to {flag ? 'Indian Players' : 'List of Players'}
        </button>
      </header>
      
      <main>
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </main>
    </div>
  );
}

export default App;