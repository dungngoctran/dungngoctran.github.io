import React from 'react';
import Welcome from './Welcome';
import Gallery from './Gallery';
import Menu from './Menu';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Debbie - House Call Barber</h2>
      </header>
      <Welcome />
      <Gallery />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
