import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import CinemaSearch from './Pages/Search';
import MovieDetails from './Pages/MovieDetails';
import Showing from './Items/Shows';
import Booking from './Pages/Booking';


import './App.css';

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/Showing">
              <Showing />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Search">
              <CinemaSearch />
            </Route>
            <Route path="/Booking/:id">
              <Booking />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
