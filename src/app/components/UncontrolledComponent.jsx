import React from 'react'
import { useRef } from "react";

const UncontrolledComponent = () => {

    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(emailRef.current.value);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={emailRef}
                    placeholder="Enter email"
                    name="email"
                    className='border border-gray-300 rounded-md px-2 py-1'
                />

                <button type="submit" className='border border-gray-300 rounded-md px-2 py-1'>Login</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent