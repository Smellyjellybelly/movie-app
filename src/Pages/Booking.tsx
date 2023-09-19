import React from 'react';
import { useParams } from 'react-router-dom';
import { Cinema, Show, Seat } from '../Interface/interface';
import JsonData from '../movies.json';

const data: Cinema = JsonData.cinema;

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const showId = parseInt(id, 10);

  // Find the show data in the cinema object
  const show: Show | undefined = data.movies
    .flatMap(movie => movie.shows) // we flatten our cinema object and creates a new list containen only movie.shows objects
    .find(show => show.id === showId); // with our new list we can find the precisshow that matches our id
    
    // now error handling if no data
  if (!show) {
    return <div>Show not found</div>;
  }

  // Function to render seating suggestions
  const Seating = (seats: Seat[]) => {
    return (
      <div>
        <h3>Seating Suggestions:</h3>
        <ul>
          {seats.map((seat, index) => (
            <li key={index}>
              Seat {seat.seatNumber} - {seat.booked ? 'Booked' : 'Available'}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="booking">
      <h2>Booking for {show.room}</h2>
      {Seating(show.seats)}
    </div>
  );
};

export default Booking;
