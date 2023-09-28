import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img src={movie.picture} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieItem;
