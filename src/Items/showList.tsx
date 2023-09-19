import React from 'react';
import { MovieItemProps, Show } from '../Interface/interface';

const ShowList: React.FC<MovieItemProps> = ({ movie }) => {
    return (
        <div className='show-list'>
            <h3>Visning av {movie.title}</h3>
            <p>Beskrivning: {movie.description}</p>
            <ul>
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
