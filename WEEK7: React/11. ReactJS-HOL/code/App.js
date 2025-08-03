import React from 'react';
import Counter from './components/Counter';
import WelcomeComponent from './components/WelcomeComponent';
import SyntheticEventComponent from './components/SyntheticEventComponent';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">React Event Examples App</h1>
      <Counter />
      <WelcomeComponent />
      <SyntheticEventComponent />
      <CurrencyConverter />
    </div>
  );
};

export default App;
