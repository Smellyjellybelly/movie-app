import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CinemaSearch = ({ cinemaData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(cinemaData.movies); // Use cinemaData.movies here
  const history = useHistory();

  useEffect(() => {
    const filterMovies = () => {
      if (searchTerm === "") {
        setFilteredMovies(cinemaData.movies); // Use cinemaData.movies here
      } else {
        const filtered = cinemaData.movies.filter((movie) => // Use cinemaData.movies here
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filtered);
      }
    };

    filterMovies();
  }, [searchTerm, cinemaData]); // Add cinemaData to the dependency array

  const navigateToMovieDetails = (index) => {
    history.push(`/Movies/${index}`);
  };

  return (
    <div className="search">
      <div className='input-cont'>
        <input
          type="text"
          placeholder='Sök'
          value={searchTerm}
          onChange={event => { setSearchTerm(event.target.value) }}
        />
      </div>
      <div className='search-con'>
        {filteredMovies.map((movie, index) => (
          <div
            className='search-res'
            key={index}
            onClick={() => navigateToMovieDetails(index)}
          >
            <img src={movie.picture} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CinemaSearch;
