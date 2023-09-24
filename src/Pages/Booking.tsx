import React from 'react';
import { useParams } from 'react-router-dom';
import { Cinema, Show } from '../Interface/interface';
import JsonData from '../movies.json';

const data: Cinema = JsonData.cinema;

const Booking = () => {
  // gets the id from the URL using useParams
  const { id } = useParams<{ id: string }>();
  const showId = parseInt(id, 10); // converts id to an integer

  // find the show data based on the showid parameter
  const show: Show | undefined = data.movies
    .flatMap(movie => movie.shows) // Flatten the nested 'shows' arrays
    .find(show => show.id === showId); // Find the show with the matching 'showId'

  // If the show is not found, display a message
  if (!show) {
    return <div>Show not found</div>;
  }

  // Function to toggle the selection of a seat when it's clicked
  const toggleSeatSelection = (event: React.MouseEvent<HTMLLIElement>) => {
    const seatElement = event.currentTarget;
    const seatIndex = parseInt(seatElement.getAttribute('data-seat-index') || '', 10);

    // Check if 'seatIndex' is NaN (not a number)
    if (isNaN(seatIndex)) {
      return; // Exit the function if 'seatIndex' is not valid
    }

    // Check if the seat is booked
    const isBooked = show.seats[seatIndex].booked;

        // If the seat is not booked, toggle the 'selected-seat' class to change its appearance
    if (!isBooked) {
      // Toggle the class
      seatElement.classList.toggle('selected-seat');
    }
  };

  return (
    <div className="booking">
      <h2>Bokning av {show.room}</h2>
      <div>
        <h3>Lediga Stolar:</h3>
        <ul>
          {show.seats.map((seat, index) => (
            <li
              key={index}
              className={`seat ${seat.booked ? 'booked-seat' : 'available-seat'}`}
              data-seat-index={index}
              onClick={toggleSeatSelection}
            >
              Plats {seat.seatNumber} - {seat.booked ? 'Booked' : 'Available'}
              <button>Boka</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Booking;
