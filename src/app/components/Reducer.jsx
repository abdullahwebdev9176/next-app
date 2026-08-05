'use client'

import React, { useReducer } from 'react'

const Reducer = () => {


    const initialState = {
        count: 0
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>

            <div className='text-center flex flex-col items-center justify-center'>
                <h1>{state.count}</h1>

                <div className='flex justify-center items-center gap-4'>


                    <button className='mt-4 cursor-pointer rounded py-2 px-4 bg-green-500 text-white'
                        onClick={() =>
                            dispatch({ type: "increment" })}
                    >
                        +
                    </button>

                    <button className='mt-4 cursor-pointer rounded py-2 px-4 bg-green-500 text-white'
                        onClick={() =>
                            dispatch({ type: "decrement" })}
                    >
                        -
                    </button>

                    <button className='mt-4 cursor-pointer rounded py-2 px-4 bg-green-500 text-white'
                        onClick={() =>
                            dispatch({ type: "reset" })}
                    >
                        Reset
                    </button>

                </div>
            </div>

        </>
    )
}

export default Reducer