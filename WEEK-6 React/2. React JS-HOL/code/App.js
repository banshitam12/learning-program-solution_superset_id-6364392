import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management Portal</h1>
      </header>
      
      <main>
        <Home />
        <hr />
        <About />
        <hr />
        <Contact />
      </main>
    </div>
  );
}

export default App;

