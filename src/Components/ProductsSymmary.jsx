import React from 'react'
import { useSelector } from 'react-redux'
import { cartProducts } from '../stores/cart/cartSlice' 
import ProductsSummaryCard from './ProductsSummaryCard';

function ProductsSymmary() {
    const cart = useSelector(cartProducts);

  return (
    <div className='flex flex-col'>
        { cart && cart?.map((product, index) =>{
            return(
                <div>
                    <ProductsSummaryCard product={product} key={index}/>
                </div>
            )
        })}
    </div>
  )
}

export default ProductsSymmary