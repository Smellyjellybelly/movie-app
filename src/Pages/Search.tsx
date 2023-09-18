import { Cinema } from '../Interface/interface';
import JsonData from '../movies.json';
import React from 'react';
import { useState } from 'react';

const data: Cinema = JsonData.cinema;

function CinemaSearch() {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="search">
            <input type="text" placeholder='Sök' onChange={event => { setSearchTerm(event.target.value) }} />
            {data.movies.filter((movies) => {
                if (searchTerm == ""){
                return movies
            } else if (movies.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return movies
            }
            }).map((movies) => {
                return <div className='search-res'>
                    <img src={movies.picture} alt="" />
                    <p>{movies.title}</p>
                </div>
            })}
        </div>
    );
}

export default CinemaSearch