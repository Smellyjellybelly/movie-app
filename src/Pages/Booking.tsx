import React from 'react';
import { useParams } from 'react-router-dom';
import { Show } from '../Interface/interface';
import { findShowById } from '../Items/Shows'; // Update the path to the correct location


const Booking = () => {
  // Access the id parameter from the URL
  const { id } = useParams<{ id: string }>();

  // Convert id to a number (if needed)
  const showId = parseInt(id, 10);

  // Retrieve the show data based on the showId
  const show: Show | undefined = findShowById(showId);

  if (!show) {
    return <div>Show not found</div>;
  }

  // Render the booking content based on the show object
  return (
    <div className="booking">
      <h2>Booking for {show.room}</h2>
      
    </div>
  );
};

export default Booking;
