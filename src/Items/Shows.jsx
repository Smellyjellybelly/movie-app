import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Define the findShowById function that takes cinemaData as a parameter
export const findShowById = (showId, cinemaData) => {
  for (const movie of cinemaData.movies) {
    for (const show of movie.shows) {
      if (show.id === showId) {
        return show;
      }
    }
  }
  return undefined;
};

const Showing = ({ cinemaData }) => {
  const [selectedShowIds, setSelectedShowIds] = useState(Array(cinemaData.movies.length).fill(''));
  const history = useHistory();

  const getAvailableSeatCount = (show) => {
    if (!show || !show.seats) return 0;
    return show.seats.filter((seat) => !seat.booked).length;
  };

  const redirectToBooking = (movieIndex) => {
    const selectedShowId = selectedShowIds[movieIndex];
    if (selectedShowId) {
      history.push(`/Booking/${selectedShowId}`);
    }
  };

  const handleShowSelect = (e, movieIndex) => {
    const newSelectedShowIds = [...selectedShowIds];
    newSelectedShowIds[movieIndex] = e.target.value;
    setSelectedShowIds(newSelectedShowIds);
  };

  return (
    <div>
      <h2>MOVIES</h2>
      <ul className="movie-show">
        {cinemaData.movies.map((movie, index) => (
          <li key={index}>
            <img src={movie.picture} alt="" />
            <h3>{movie.title}</h3>
            <p>Längd: {movie.duration}</p>
            <h4>Visningar:</h4>
            <select
              id={`showSelector-${index}`}
              onChange={(e) => handleShowSelect(e, index)}
              value={selectedShowIds[index]}
            >
              <option value="">Välj en visning</option>
              {movie.shows.map((show, showIndex) => (
                <option key={showIndex} value={show.id}>
                  Visning: {show.time}, Rum: {show.room}, Lediga platser: {getAvailableSeatCount(show)}
                </option>
              ))}
            </select>
            <button onClick={() => redirectToBooking(index)}>Boka</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Showing;
