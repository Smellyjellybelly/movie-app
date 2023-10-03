import React from 'react';
import { useParams } from 'react-router-dom';
import MovieItem from '../Items/MovieItem';
import ShowList from '../Items/showList';

const MovieDetails = ({ cinemaData }) => {
  // Retrieve the 'id' parameter from the URL using the useParams hook
  const { id } = useParams();

  // Assuming 'data' comes from your fetched JSON data in App.js
  const movie = cinemaData.cinema.movies.find(currentMovie => currentMovie.id === parseInt(id));

  // If the movie is not found, display a message
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <h2>Film-info</h2>
      <div className='md-cont'>
        {/* Render the MovieItem component with the selected movie */}
        <MovieItem movie={movie} />

        {/* Render the ShowList component with the selected movie */}
        <ShowList movie={movie} />
      </div>
    </div>
  );
}

export default MovieDetails;
