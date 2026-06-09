'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { useAuth } from '../services/UserContext'

const MemoHook = () => {
  const [number, setNumber] = useState(1)

  // Value memoize kar raha hai
  const square = useMemo(() => {
    console.log('Calculating Square...')
    return number * number
  }, [number])

  const user = useAuth()

  console.log(user)

  // Function memoize kar raha hai
  const increment = useCallback(() => {
    setNumber(prev => prev + 1)
  }, [])

  return (
    <div className='text-center'>
      <p className='mb-3'>Number: {number}</p>
      <p className='mb-3'>Square: {square}</p>

      <button className='cursor-pointer rounded py-2 px-4 bg-green-500 text-white' onClick={increment}>
        Increment
      </button>
    </div>
  )
}

export default MemoHook