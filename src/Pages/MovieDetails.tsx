import React from 'react';
import { useParams } from 'react-router-dom';
import { Cinema, Movie } from '../Interface/interface';
import JsonData from '../movies.json';
import Movies from './Movies';

const MovieDetails = () => {
    type MovieParams = {
        id: string;
      };
    const { id }:MovieParams = useParams<MovieParams>();
    const data: Cinema = JsonData.cinema;
    const movie: Movie | undefined = data.movies.find(movie => Movies.id === parseInt(id,10));

  if (!movie) {
    return <div>Movie not found</div>;
  }

//   const movie = data.movies[id];
    // console.log("test", id);
    return (
        <div className="movie-details">
        <h2>movie details - {id}</h2>
        </div>
    );
}

export default MovieDetails