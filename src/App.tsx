import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Movies from './Pages/Movies';
import CinemaSearch from './Pages/Search';
import MovieDetails from './Pages/MovieDetails';

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
            <Route exact path="/Movies">
              <Movies />
            </Route>
            <Route exact path="/Movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Search">
              <CinemaSearch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
