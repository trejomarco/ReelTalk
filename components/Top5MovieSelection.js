import React, { useState } from 'react';

function Top5MovieSelection() {
    const [selectedMovies, setSelectedMovies] = useState([]);
    const availableMovies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5'];

    const handleMovieToggle = (movie) => {
        setSelectedMovies((prevSelectedMovies) =>
            prevSelectedMovies.includes(movie)
                ? prevSelectedMovies.filter((m) => m !== movie)
                : [...prevSelectedMovies, movie]
        );
    };

    return (
        <div>
            <p>Select Your Top 5 Favorite Movies:</p>
            {availableMovies.map((movie) => (
                <label key={movie}>
                    <input
                        type="checkbox"
                        value={movie}
                        checked={selectedMovies.includes(movie)}
                        onChange={() => handleMovieToggle(movie)}
                    />
                    {movie}
                </label>
            ))}
        </div>
    );
}

export default Top5MovieSelection;
