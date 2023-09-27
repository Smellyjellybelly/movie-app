import React from 'react';
import { Show } from '../Interface/interface';

interface SeatListProps {
  show: Show;
  selectedSeats: number[];
  toggleSeatSelection: (seatIndex: number) => void;
}

const SeatList: React.FC<SeatListProps> = ({ show, selectedSeats, toggleSeatSelection }) => {
  return (
    <ul>
      {show.seats.map((seat, index) => (
        <li
          key={index}
          className={`seat ${seat.booked ? 'booked-seat' : 'available-seat'}`}
          data-seat-index={index}
          onClick={() => !seat.booked && toggleSeatSelection(index)} // Handle click only if seat is not booked
        >
          Plats {seat.seatNumber} - {seat.booked ? 'Booked' : 'Available'}
          <input
            type="checkbox"
            checked={selectedSeats.includes(index)}
            onChange={() => {}} // Empty onChange handler for disabled checkboxes
            disabled={seat.booked} // Disable the checkbox if the seat is booked
          />
        </li>
      ))}
    </ul>
  );
};

export default SeatList;
