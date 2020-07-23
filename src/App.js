import React from 'react';
import Home from './Home';
import FullGallery from './GalleryFull';
import {Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link className="fas fa-home" to="/"></Link>
          <h2>Debbie - Hair Stylist</h2>
        </header>
        <Switch>
          <Route path="/gallery"><FullGallery /></Route>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
