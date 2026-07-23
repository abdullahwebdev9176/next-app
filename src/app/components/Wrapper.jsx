'use client'

import React, { useState } from 'react'
import ParentNewTsFile from './ParentNewTsFile'
import TodoComponent from './TodoComponent'
import UserProfile from './UserProfile'
// import NewForm from '@/app/components/NewForm'
const Wrapper = () => {


  return (
    <div className='text-center'>
      {/* <NewForm /> */}
      {/* <ParentNewTsFile /> */}
      {/* <TodoComponent /> */}
      <UserProfile />
    </div>
  )
}

export default Wrapper