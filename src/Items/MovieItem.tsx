// src/Components/MovieItem.tsx

import React from 'react';
import { MovieItemProps } from '../Interface/interface';



const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  
  return (
        <div className="movie-item">
          <img src={movie.picture} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
  );
}

export default MovieItem;
