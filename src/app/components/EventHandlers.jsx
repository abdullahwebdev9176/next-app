
'use client'

import React, {useState} from 'react'

const EventHandlers = () => {
    const [name, setName] = useState('');

    const handleClick = () =>{
        setName("Hello Abdullah")
    }

    console.log(name)

  return (
    <>
    <button onClick={handleClick} className='cursor-pointer rounded py-2 px-4 bg-green-500 text-white'>Show Message</button>
    </>
  )
}

export default EventHandlers