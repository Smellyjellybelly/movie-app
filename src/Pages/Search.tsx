import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Cinema } from '../Interface/interface';
import JsonData from '../movies.json';

const data: Cinema = JsonData.cinema;

function CinemaSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(data.movies);
    const history = useHistory();

    useEffect(() => {
        const filterMovies = () => {
            if (searchTerm === "") {
                setFilteredMovies(data.movies);
            } else {
                const filtered = data.movies.filter((movie) =>
                    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredMovies(filtered);
            }
        };

        filterMovies();
    }, [searchTerm]);

    const navigateToMovieDetails = (index: number) => {
        history.push(`/Movies/${index}`); // Use the same route as in the Movies component
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
