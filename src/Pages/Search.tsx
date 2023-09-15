import React, { useState, useEffect, ChangeEvent } from 'react';

// Import your interface definitions
import { RootObject, Movie, Cinema } from '../Interface/interface'; 

function CinemaSearch() {
    const [cinemaData, setCinemaData] = useState<Cinema | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('movies.json');
                if (!response.ok) {
                    throw new Error('Problem fetching data');
                }
                const data: RootObject = await response.json(); // Parse with RootObject type
                setCinemaData(data.cinema);
            } catch (error) {
                console.error(error);
                // Handle error state here, if needed
            }
        };

        fetchData();
    }, []);

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    let filteredMovies: Movie[] = [];

    if (cinemaData) {
        filteredMovies = cinemaData.movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div>
            <h1>Cinema Search</h1>
            <input
                type="text"
                placeholder="Search for a movie..."
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            <ul>
                {filteredMovies.map((movie) => (
                    <li key={movie.title}>
                        {movie.title} ({movie.duration})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CinemaSearch;
