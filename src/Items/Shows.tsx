import React from 'react';
import { Cinema } from '../Interface/interface';
import JsonData from '../movies.json';
import { Show, Seat } from '../Interface/interface';
import { MovieItemProps } from '../Interface/interface';



const data: Cinema = JsonData.cinema;

const Showing = () => {
  const getAvailableSeatCount = (show: Show) => {
    if (!show || !show.seats) return 0;

    return show.seats.filter((seat: Seat) => !seat.booked).length;
  };

  return (
    <div >
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
                  <button>Boka</button>
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
