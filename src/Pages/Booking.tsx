import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cinema, Show } from '../Interface/interface';
import JsonData from '../movies.json';
import SeatList from '../Items/SeatList';

const data: Cinema = JsonData.cinema;

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const showId = parseInt(id, 10);

  const show: Show | undefined = data.movies
    .flatMap(movie => movie.shows)
    .find(show => show.id === showId);

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [bookingMessage, setBookingMessage] = useState<string | null>(null);

  const toggleSeatSelection = (seatIndex: number) => {
    setSelectedSeats(prevSelectedSeats => {
      if (prevSelectedSeats.includes(seatIndex)) {
        return prevSelectedSeats.filter(seat => seat !== seatIndex);
      } else {
        return [...prevSelectedSeats, seatIndex];
      }
    });
  };

  const [purchaseComplete, setPurchaseComplete] = useState(false);


  const handleBooking = () => {
    if (!show) {
      setBookingMessage("Visning inte hittad.");
      return;
    }
  
    if (selectedSeats.length === 0) {
      setBookingMessage("Du har inte valt någon plats/platser.");
    } else {
      const selectedSeatNumbers = selectedSeats.map(seatIndex => show.seats[seatIndex].seatNumber);
      setBookingMessage(`Du har valt följande plats/platser: ${selectedSeatNumbers.join(', ')}`);
      setPurchaseComplete(true); // Set purchaseComplete to true
    }
  };
  

  return (
    <div className="booking">
    {show && (
      <>
        <h2>Bokning av {show.room}</h2>
        <div>
          <h3>Lediga Stolar:</h3>
          <SeatList show={show} selectedSeats={selectedSeats} toggleSeatSelection={toggleSeatSelection} />
          <div>
            <button onClick={handleBooking}>Boka</button>
            {bookingMessage && <p>{bookingMessage}</p>}
          </div>
          {purchaseComplete && (
            <div>
              <button onClick={() => alert('Tack för ditt köp!')}>Köp</button>
            </div>
          )}
        </div>
      </>
    )}
    {!show && <div>Show not found</div>}
  </div>
  
  );
};

export default Booking;
