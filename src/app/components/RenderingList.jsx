import React from 'react'

const RenderingList = () => {

    const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

  return (
    <div>
        <ul>
            {fruits?.map((fruit, index)=>{
                return <li key={index}>{fruit}</li>
            })}
            
        </ul>
    </div>
  )
}

export default RenderingList