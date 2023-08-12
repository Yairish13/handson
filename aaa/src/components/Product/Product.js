import React, { memo } from 'react'
import './index.css'
function Product({ product, onClick }) {
    console.log(product, 'products');
    return (
        <div className='card' onClick={onClick}>
            <div>{product.brand}</div>
            <div>{product.category}</div>
            <div>{product.color}</div>
            <div>{product.price}</div>
        </div>
    )
}

export default memo(Product);