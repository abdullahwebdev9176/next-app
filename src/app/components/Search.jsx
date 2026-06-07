'use client'

import React, { useState } from 'react'

const Search = () => {

    const [search, setSearch] = useState('');

    const businesses = [
        'Plumber',
        'Electrician',
        'Painter',
        'Carpenter',
        'Mechanic'
    ];

    const filteredBusinesses = businesses.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );



    return (

        <>
            <div className='flex flex-col justify-center text-center'>
                <div className='mb-4'>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='p-3 d-block w-full max-w-[500px] mx-auto border outline-none rounded' />
                </div>
                <ul>
                    {filteredBusinesses.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Search;