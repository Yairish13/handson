import React, { memo } from 'react';
import AllProducts from '../AllProducts/AllProducts';

const Basket = ({ products }) => {
  console.log('Basket re-rendered'); 
  return (
    <div className='basket'>
      Basket
      <AllProducts products={products} />
    </div>
  );
};

export default memo(Basket);