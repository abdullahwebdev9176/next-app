'use client'

import React, { useState } from 'react'

const Alert = ({type, message}) => {

    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () =>{
        setIsVisible(false)
    }

    if(!isVisible) return null

    return (
        <div className={`flex justify-between p-4 max-w-[500px] w-full text-white mb-3 ${type == 'error' ? 'bg-red-500' :'bg-green-500'}`}>
            <p>{message}</p>

            <span className='cursor-pointer' onClick={handleClose}>X</span>
        </div>
    )
}

export default Alert