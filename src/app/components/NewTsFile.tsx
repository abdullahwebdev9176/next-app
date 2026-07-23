import React from 'react'
import type { TestType } from '../types/projectTypes'

const NewTsFile = ({ name }: {name: TestType}) => {

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  )
}

export default NewTsFile