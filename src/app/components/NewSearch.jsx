'use client'

import React from 'react'

const NewSearch = ({ searchTerm, setSearchTerm }) => {
    return (
        <div>
            <div className='mb-4'>
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='p-3 d-block w-full max-w-[500px] mx-auto border outline-none rounded' />
            </div>
        </div>
    )
}

export default NewSearch