import React, { useState } from 'react'
import NewTsFile from './NewTsFile'
import type { TestType } from '../types/projectTypes';

const ParentNewTsFile: React.FC = () => {

  const [name, setName] = useState<TestType>('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(name);
  }


  return (
    <div>

      <div className="flex flex-col gap-4 mb-3">
        <NewTsFile name={name} />
      </div>
      
      <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Type your name" className=' px-5 py-3 border boder-gray-400 rounded-md w-full mb-3' /> 

      <button className="cursor-pointer px-5 py-2 border boder-gray-400 rounded-md" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ParentNewTsFile