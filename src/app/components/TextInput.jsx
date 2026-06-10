
import React from 'react'

const TextInput = ({ label, value, handleChange, placeholder, id, type, error, name }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input value={value} name={name} onChange={handleChange} placeholder={placeholder} id={id} type={type} className='p-3 d-block w-full max-w-[500px] mx-auto border outline-none box-shadow-none border-dark rounded mb-3' />
            {error && <small className='mt-3 d-block text-red-600'>{error}</small>}
        </div>
    )
}

export default TextInput