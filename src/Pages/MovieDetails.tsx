import React from 'react';
import { useParams } from 'react-router-dom';
import { Cinema, Movie } from '../Interface/interface';
import JsonData from '../movies.json';
import MovieItem from '../Items/MovieItem';
import ShowList from '../Items/showList';



const MovieDetails = () => {
  // Define a type for the 'id' parameter from the URL
  type MovieParams = {
    id: string;
  };

   // Retrieve the 'id' parameter from the URL using the useParams hook
  const { id }: MovieParams = useParams<MovieParams>();

  // Get the cinema data from the JSON file
  const data: Cinema = JsonData.cinema;

  // Find the movie in the cinema data that matches the 'id' parameter
  const movie: Movie | undefined = data.movies.find(currentMovie => currentMovie.id === parseInt(id));

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

export default MovieDetails