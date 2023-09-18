import React from 'react';
import { Link } from 'react-router-dom';
import { Cinema, Show, Seat } from '../Interface/interface';
import JsonData from '../movies.json';
import { useHistory } from 'react-router-dom';

const data: Cinema = JsonData.cinema;

export const findShowById = (showId: number): Show | undefined => {
  // Loop through movies and their shows to find the matching show by ID
  for (const movie of data.movies) {
    for (const show of movie.shows) {
      if (show.id === showId) {
        return show;
      }
    }
  }
  return undefined; // Show not found
};

const Showing = () => {
  const getAvailableSeatCount = (show: Show) => {
    if (!show || !show.seats) return 0;
    return show.seats.filter((seat: Seat) => !seat.booked).length;
  };

  return (
    <div>
      <h2>MOVIES</h2>
      <ul className="movie-show">
        {data.movies.map((movie, index) => (
          <li key={index}>
            <img src={movie.picture} alt="" />
            <h3>{movie.title}</h3>
            <p>Duration: {movie.duration}</p>
            <h4>Shows:</h4>
            <ul>
              {movie.shows.map((show, showIndex) => (
                <li key={showIndex}>
                  <p>Visning: {show.time}</p>
                  <p>Rum: {show.room}</p>
                  <p>Lediga platser: {getAvailableSeatCount(show)}</p>
                  <Link to={`/Booking/${show.id}`}>Boka</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Showing;
