import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    let {id} = useParams();
  return (
   <>
   <h1> Welcome to Product Details Page</h1>
   <p>Your are viewing the product {id} </p>
   </>
  )
}

export default ProductDetails