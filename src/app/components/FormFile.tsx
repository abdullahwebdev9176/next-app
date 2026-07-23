import React, { useState } from 'react'

const FormFile = () => {
  const [email, setEmail] = useState('');
  
  // 1. Input Change Event Type
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // 2. Form Submit Event Type
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Form reload rokne ke liye
    console.log("Submitted email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={handleInputChange} 
        placeholder="Enter email" 
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormFile

