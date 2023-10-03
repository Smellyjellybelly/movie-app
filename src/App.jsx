import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import CinemaSearch from './Pages/Search';
import MovieDetails from './Pages/MovieDetails';
import Showing from './Items/Shows';
import Booking from './Pages/Booking';

function App() {
  const [cinemaData, setCinemaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/movies.json');
        console.log(response);
        console.log(response.ok);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setCinemaData(data);
        console.log(data);
        console.log("we are here");
        console.log(cinemaData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("cinemaData has changed:", cinemaData);
  }, [cinemaData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
                <MovieDetails cinemaData={cinemaData} />
              </Route>
              <Route path="/Showing">
                <Showing cinemaData={cinemaData} />
              </Route>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/Search">
                <CinemaSearch cinemaData={cinemaData} />
              </Route>
              <Route path="/Booking/:id">
                <Booking cinemaData={cinemaData} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
