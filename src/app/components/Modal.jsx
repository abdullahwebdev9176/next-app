

import React from 'react'

const Modal = ({ onClose, isOpen }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className='absolute top-5 bg-yellow-100 border border-yellow-200 p-4 rounded text-center'>

            <h1 className='mb-3 font-bold'>Add Business</h1>

            <input type="text" className='p-3 d-block w-full max-w-[500px] mx-auto border outline-none block border-gray-300 rounded' />

            <button type='button' onClick={onClose} className='mt-4 cursor-pointer rounded py-2 px-4 bg-red-400 text-white'>Close</button>

        </div>
    )
}

export default Modal