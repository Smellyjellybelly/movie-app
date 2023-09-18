// src/Components/MovieItem.tsx

import React from 'react';
import { MovieItemProps } from '../Interface/interface';
import { Link } from 'react-router-dom';

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
   <Link to='../MovieDetails/'>
        <div className="movie-item">
          <img src={movie.picture} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.duration}</p>
        </div>
      </Link>
  );
}


export default MovieItem;
