import React from 'react';
import AllProducts from '../AllProducts/AllProducts';

const Basket = React.memo(({ products }) => {
  console.log('Basket re-rendered'); 
  return (
    <div className='basket'>
      Basket
      <AllProducts products={products} />
    </div>
  );
});

export default Basket;