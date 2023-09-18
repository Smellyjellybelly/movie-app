import React from 'react';
import { Cinema } from '../Interface/interface';
import JsonData from '../movies.json';
import MovieItem from '../Items/MovieItem';
import { withRouter, RouteComponentProps } from 'react-router-dom'; // Import withRouter and RouteComponentProps


const data: Cinema = JsonData.cinema;

interface MoviesProps extends RouteComponentProps {
  // Define the prop types here if needed
}

const Movies: React.FC<MoviesProps> = ({ history }) => {
  const handleMovieItemClick = (index: number) => { // Specify the type for 'index'
    // Programmatically navigate to the MovieDetails page
    history.push(`/movies/${index}`);
  };

  return (
    <div className="movie">
      <h2>MOVIES</h2>
      <ul>
        {data.movies.map((movie, index) => (
          <li key={index} onClick={() => handleMovieItemClick(index)}>
            
            <MovieItem movie={movie} />
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(Movies);
