
'use client'

import React, { useState } from 'react'

const LoginStatusNew = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () =>{
        
        setIsLoggedIn(!isLoggedIn)
        
    }

    return (
        <div className='text-center'>
            <p className='mb-3'>{!isLoggedIn ? 'Not Logged In' : 'Logged In'}</p>

            <button className='cursor-pointer rounded py-2 px-4 bg-green-500 text-white' onClick={handleLogin}>{!isLoggedIn ? 'Login' : 'Logout'}</button>
        </div>
    )
}

export default LoginStatusNew