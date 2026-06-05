
'use client'

import React, { useEffect, useState } from 'react'

const CounterApp = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted');
    }, []);

    useEffect(() => {
        console.log('Count changed:', count);
    }, [count]);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }
    const handleReset = () => {
        setCount(0);
    }
    
    return (
        <>
            <div>
                <h1 className='text-2xl font-bold text-center mb-5'>Count <span>{count}</span></h1>

                <div className='flex gap-4'>
                    <button className='cursor-pointer rounded py-2 px-4 bg-green-500 text-white' onClick={handleIncrement}>
                        +1
                    </button>
                    <button className='cursor-pointer rounded py-2 px-4 bg-green-500 text-white' onClick={handleDecrement}>
                        -1
                    </button>
                    <button className='cursor-pointer rounded py-2 px-4 bg-green-500 text-white' onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default CounterApp