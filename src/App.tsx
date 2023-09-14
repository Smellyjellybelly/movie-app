import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Movies from './Pages/Movies';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Pages/Movies">
              <Movies />
            </Route>
            <Route path="/Pages/About">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
