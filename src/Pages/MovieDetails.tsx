import React from 'react';
import { useParams } from 'react-router-dom';
import { Cinema, Movie } from '../Interface/interface';
import JsonData from '../movies.json';
import MovieItem from '../Items/MovieItem';
import ShowList from '../Items/showList';



const MovieDetails = () => {
  type MovieParams = {
    id: string;
  };
  const { id }: MovieParams = useParams<MovieParams>();
  const data: Cinema = JsonData.cinema;
  const movie: Movie | undefined = data.movies.find(currentMovie => currentMovie.id === parseInt(id));
  // console.log("Id", id);
  // console.log("data", data);
  // console.log("movie", movie);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  //   const movie = data.movies[id];
  // console.log("test", id);
  return (

    <div className="movie-details">
      <h2>Film-info</h2>
      <div className='md-cont'>
        <MovieItem movie={movie} />
        <ShowList movie={movie} />
      </div>
    </div>


  );
}

export default MovieDetails