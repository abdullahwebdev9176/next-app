'use client'

import React, { useState } from 'react'
import NewSearch from './NewSearch'
import ProductList from './ProductList'

const Wrapper = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    'Apple',
    'Banana',
    'Mango',
    'Orange',
    'Grapes',
  ];

  return (
    <div className='text-center'>
      <NewSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList products={products} searchTerm={searchTerm} />
    </div>
  )
}

export default Wrapper