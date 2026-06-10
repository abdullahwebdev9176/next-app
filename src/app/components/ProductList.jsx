'use client'

import React from 'react'

const ProductList = ({searchTerm, products}) => {

   const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredProducts.map((item, index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ProductList