import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Cinema, Show, Seat } from '../Interface/interface';
import JsonData from '../movies.json';

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
  const [selectedShowIds, setSelectedShowIds] = useState<string[]>(Array(data.movies.length).fill(''));
  const history = useHistory();

  const getAvailableSeatCount = (show: Show) => {
    if (!show || !show.seats) return 0;
    return show.seats.filter((seat: Seat) => !seat.booked).length;
  };

  const redirectToBooking = (movieIndex: number) => {
    const selectedShowId = selectedShowIds[movieIndex];
    if (selectedShowId) {
      history.push(`/Booking/${selectedShowId}`);
    }
  };

  const handleShowSelect = (e: React.ChangeEvent<HTMLSelectElement>, movieIndex: number) => {
    const newSelectedShowIds = [...selectedShowIds];
    newSelectedShowIds[movieIndex] = e.target.value;
    setSelectedShowIds(newSelectedShowIds);
  };

  return (
    <div>
      <h2>MOVIES</h2>
      <ul className="movie-show">
        {data.movies.map((movie, index) => (
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
