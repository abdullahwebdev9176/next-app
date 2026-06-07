'use client'

import React, { useState } from 'react'
import Modal from './Modal'

const Wrapper = () => {

    const [open, setOpen] = useState(false);

    const handleModal = () =>{
        setOpen(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }

  return (
    <>
        <Modal isOpen={open} onClose={handleClose} />

        <button onClick={handleModal} type='button' className='mt-4 cursor-pointer rounded py-2 px-4 bg-green-500 text-white'>Open Modal</button>
    </>
  )
}

export default Wrapper