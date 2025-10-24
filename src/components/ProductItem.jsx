import React from 'react'

const ProductItem = ({ product }) => {
    let badges = product.badges;

    return (
        <li>
            <div className='img-box'>
                <img src={product.image} alt="" />
            </div>
            <div className='text-box'>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>
                    {badges.includes("품절") ?
                        <span className="sold-out">품절</span> : null}
                    {badges.includes("MD추천") ?
                        <span className="md">MD추천</span> : null}
                </p>
            </div>
        </li>
    )
}

export default ProductItem