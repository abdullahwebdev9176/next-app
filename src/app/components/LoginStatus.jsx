'use client'

import React, { useState } from 'react'


import MovieCard from './MovieCard';

const LoginStatus = () => {

    const movies = [
        {
            id: 1,
            title: "Interstellar",
            year: 2014,
            rating: 8.7,
        },
        {
            id: 2,
            title: "Inception",
            year: 2010,
            rating: 8.8,
        },
        {
            id: 3,
            title: "The Dark Knight",
            year: 2008,
            rating: 9.0,
        },
    ];

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-5'>Login Status</h1>
            <p className='text-center'>You are currently logged {isLoggedIn ? 'in' : 'out'}.</p>

            <div className='my-4 text-center'>
                {isLoggedIn ? (
                    <button className='cursor-pointer rounded py-2 px-4 bg-green-500 text-white' onClick={handleLogout}>Logout</button>
                ) : (
                    <button className='cursor-pointer rounded py-2 px-4 bg-green-500 text-white' onClick={handleLogin}>Login</button>
                )}
            </div>

            {isLoggedIn && (
                <div>
                    <h2 className='text-xl font-bold text-center mb-3'>Movie List</h2>
                    <div className='flex items-center gap-4'>
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} title={movie.title} year={movie.year} rating={movie.rating} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default LoginStatus