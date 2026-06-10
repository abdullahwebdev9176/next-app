'use client'

import React, { useState } from 'react'
import TextInput from './TextInput';

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email:''
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData)
  }

  const handleChange = (e) => {
    
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    
  }
  return (
    <div className='text-center'>
      <form onSubmit={handleSubmit}>

        <TextInput type="text" name='name' value={formData.name} handleChange={handleChange} label="name" placeholder="Enter name" />

        <TextInput type="email" name='email' value={formData.email} handleChange={handleChange} label="Email" placeholder="Enter Email" />

        <button className='mt-4 cursor-pointer rounded py-2 px-4 bg-green-500 text-white'>Submit</button>

      </form>
    </div>
  )
}

export default Form