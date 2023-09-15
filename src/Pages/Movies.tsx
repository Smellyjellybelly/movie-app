import React from 'react';
import { Cinema, Movie, RootObject } from '../Interface/interface';
import JsonData from '../movies.json';
import MovieItem from '../Items/MovieItem';

const data: Cinema = JsonData.cinema; 

const Movies = () => {
  return (
    <div className="movie">
      <h2>MOVIES</h2>
      <ul>
        {data.movies.map((movie, index) => (
          <li key={index}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;

