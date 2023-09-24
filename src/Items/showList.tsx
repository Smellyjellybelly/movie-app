import React from 'react';
import { MovieItemProps, Show } from '../Interface/interface';

// Define a functional component 'ShowList' with props of type 'MovieItemProps'
const ShowList: React.FC<MovieItemProps> = ({ movie }) => {
    return (
        <div className='show-list'>
            <h3>Visning av {movie.title}</h3>
            <p>Beskrivning: {movie.description}</p>
            <ul>
                {/* Map through the 'shows' array of the movie and display show information */}
                {movie.shows.map((show: Show) => (
                    <li key={show.id}>
                        <p>Tidspunkt: {show.time}</p>
                        <p>Rum: {show.room}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShowList;
