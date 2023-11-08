import React from 'react'
import ProductComponent from './ProductComponent'

function ProductListing() {
    console.log(products)
  return (
    <div className='ui grid container'>
       <ProductComponent/>
    </div>
  )
}

export default ProductListing