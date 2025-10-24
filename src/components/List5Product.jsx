import React from 'react'
import { productData } from "../data/productData"
import ProductItem from './ProductItem'

const List5Product = () => {
    return (
        <div>
            <h2>상품목록 (배지포함)</h2>
            <ul className='product-list'>
                {productData.map((item, id) =>
                    <ProductItem key={id} 
                    product={item} />
                )}
            </ul>
        </div>
    )
}

export default List5Product