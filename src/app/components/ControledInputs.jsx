'use client'

import React, { useState } from 'react'
import Alert from '@/app/components/Alert'

const ControledInputs = () => {

    const [value, setValue] = useState('');

    return (
        <>
            

            <div className='flex flex-col items-center text-center w-full'>

                <Alert type="succsess" message="Business added successfully" />
                <Alert type="error" message="Something went wrong" />

                <div className='my-4'>
                    <input className='p-3 d-block w-full max-w-[500px] mx-auto border outline-none box-shadow-none border-dark rounded' value={value} type="text" placeholder='Enter value' onChange={(e) => setValue(e.target.value)} />
                </div>
                <p>You typed: {value ? value : 'Value not available'}</p>
            </div>
        </>

    )
}

export default ControledInputs