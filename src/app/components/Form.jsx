'use client'

import React, { useState } from 'react'
import TextInput from './TextInput';

const Form = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = email.trim() !== '' && email.includes('@');

    if (email.trim() === '') {
      setError('Email is required')
    } else if (!email.includes('@')) {
      setError('Invalid Email')
    } else {
      setError('');
    }

    if (!isValidEmail) return;

    console.log(email);
    setEmail('')
  }
  return (
    <div className='text-center'>
      <form onSubmit={handleSubmit}>
        <TextInput type="text" value={email} handleChange={setEmail} label="Email" error={error} placeholder="Enter Email" />
        {/* <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className='p-3 d-block w-full max-w-[500px] mx-auto border outline-none box-shadow-none border-dark rounded mb-4' /> */}
        <button className='mt-4 cursor-pointer rounded py-2 px-4 bg-green-500 text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Form