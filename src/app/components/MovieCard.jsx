import React from 'react'

const MovieCard = ({id, title, year, rating}) => {

    console.log({id, title, year, rating});

    return (
        <div className="movie-card flex justify-center items-center gap-4">

                <div key={id} className="movie-info mb-4 p-4 border rounded shadow">
                    <h2 className="movie-title">{title}</h2>
                    <p className="movie-year">Year: {year}</p>
                    <p className="movie-rating">Rating: {rating}</p>
                </div>

            {/* {movies.map((movie) => (
                <div key={movie.id} className="movie-info mb-4 p-4 border rounded shadow">
                    <h2 className="movie-title">{movie.title}</h2>
                    <p className="movie-year">Year: {movie.year}</p>
                    <p className="movie-rating">Rating: {movie.rating}</p>
                </div>
            ))} */}
        </div>
    )
}

export default MovieCard