import React from 'react';

const ShowList = ({ movie }) => {
    return (
        <div className='show-list'>
            <h3>Visning av {movie.title}</h3>
            <p>Beskrivning: {movie.description}</p>
            <ul>
                {/* Map through the 'shows' array of the movie and display show information */}
                {movie.shows.map((show) => (
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
