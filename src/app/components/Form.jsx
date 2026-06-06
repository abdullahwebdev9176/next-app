'use client'

import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        setName('')
    }
  return (
    <div className='text-center'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className='p-3 d-block w-full max-w-[500px] mx-auto border outline-none box-shadow-none border-dark rounded mb-4' />
            <button className='cursor-pointer rounded py-2 px-4 bg-green-500 text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Form