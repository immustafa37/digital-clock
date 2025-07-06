import React from 'react';
import DigitalClock from './components/DigitalClock';
import ThemeToggle from './components/ThemeToggle';
import FormatToggle from './components/FormatToggle';
import './styles/Glass.css';

function App() {
  return (
    <div className="app-container">
      <div className="glass-card">
        <ThemeToggle />
        <DigitalClock />
        <FormatToggle />
      </div>
    </div>
  );
}

export default App;