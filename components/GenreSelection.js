import React, { useState } from 'react';

function GenreSelection() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const availableGenres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Science Fiction'];

    const handleGenreToggle = (genre) => {
        setSelectedGenres((prevSelectedGenres) =>
            prevSelectedGenres.includes(genre)
                ? prevSelectedGenres.filter((g) => g !== genre)
                : [...prevSelectedGenres, genre]
        );
    };

    return (
        <div>
            <p>Select Your Favorite Genres:</p>
            {availableGenres.map((genre) => (
                <label key={genre}>
                    <input
                        type="checkbox"
                        value={genre}
                        checked={selectedGenres.includes(genre)}
                        onChange={() => handleGenreToggle(genre)}
                    />
                    {genre}
                </label>
            ))}
        </div>
    );
}

export default GenreSelection;
