// src/Components/MovieItem.tsx

import React from 'react';
import { MovieItemProps } from '../Interface/interface'; // Import MovieItemProps interface


// Define a functional component 'MovieItem' with props of type 'MovieItemProps'
const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  
  return (
        <div className="movie-item">
          <img src={movie.picture} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
  );
}

export default MovieItem;
