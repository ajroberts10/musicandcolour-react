import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Live from './pages/Live';
import Demos from './pages/Demos';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/live" component={Live} />
          <Route path="/demos" component={Demos} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
