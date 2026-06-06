'use client'

import React, { useState } from 'react'

const ControledInputs = () => {

    const [value, setValue] = useState('');

    return (

        <div className='text-center w-full'>
            <div className='mb-4'>
                <input className='p-3 d-block w-full max-w-[500px] mx-auto border outline-none box-shadow-none border-dark rounded' value={value} type="text" placeholder='Enter value' onChange={(e) => setValue(e.target.value)} />
            </div>
            <p>You typed: {value ? value : 'Value not available'}</p>
        </div>
    )
}

export default ControledInputs