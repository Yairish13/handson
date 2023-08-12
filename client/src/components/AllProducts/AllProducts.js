import React, { memo, useEffect, useMemo, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import Product from '../Product/Product';

function AllProducts({ products, onClick }) {

    return (
        <div>
            {products && products.length > 0 && (
                products.map((product) =>
                    <Product product={product} onClick={() => onClick(product)} />
                )
            )}
        </div>
    )
}

export default memo(AllProducts);