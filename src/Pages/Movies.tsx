import React from 'react';
import { Cinema, Movie } from '../Interface/interface';


const Movies = () => {
  return (
    <div className="movie">
      <h2>MOVIES</h2>
      <ul>
        {data.movies.map((movie: Movie, index: number) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;

let data: Cinema = {
  name: "CinemaWorld",
  movies: [
    {
      "title": "Movie A",
      "duration": "120 mins",
      "shows": [
        {
          "time": "2023-09-07T16:00:00.000Z",
          "room": "Room 1",
          "seats": [
            { "seatNumber": "A1", "booked": false },
            { "seatNumber": "A2", "booked": true },
            { "seatNumber": "A3", "booked": false },
            { "seatNumber": "A4", "booked": false },
            { "seatNumber": "A5", "booked": false }
          ]
        },
        {
          "time": "5:00 PM",
          "room": "Room 2",
          "seats": [
            { "seatNumber": "B1", "booked": false },
            { "seatNumber": "B2", "booked": true }
          ]
        }
      ]
    },
    {
      "title": "Movie B",
      "duration": "100 mins",
      "shows": [
{
          "time": "2023-09-07T15:00:00.000Z",
          "room": "Room 3",
          "seats": [
            { "seatNumber": "C1", "booked": true },
            { "seatNumber": "C2", "booked": false }
          ]
        }
      ]
    },
    {
      "title": "Movie C",
      "duration": "140 mins",
      "shows": []
    },
    {
      "title": "Movie D",
      "duration": "110 mins",
      "shows": [
        {
          "time": "2023-09-07T17:00:00.000Z",
          "room": "Room 2",
          "seats": [
            { "seatNumber": "D1", "booked": false },
            { "seatNumber": "D2", "booked": false }
          ]
        }
      ]
    },
    {
      "title": "Movie E",
      "duration": "90 mins",
      "shows": [
        {
          "time": "2023-09-07T18:00:00.000Z",
          "room": "Room 1",
          "seats": [
            { "seatNumber": "A1", "booked": false },
            { "seatNumber": "A2", "booked": true },
            { "seatNumber": "A3", "booked": false },
            { "seatNumber": "A4", "booked": false },
            { "seatNumber": "A5", "booked": false }
          ]
        }
      ]
    }
  ]
}
