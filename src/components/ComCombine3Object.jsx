import React from 'react'
import { productData } from '../data/productData'

const Profile = ({ image, name,price }) => {
    return (
        <>
        <li>
            <p><img src={image} alt="" /></p>
            <h3>{name}</h3>
            <p>{price}</p>
        
        </li>
        </>
    )
}


const ComCombine3Object = () => {
  return (
    <div>
        <ul className='product-list'>
                {productData.map(p=>{
                    return<Profile image={p.image} name={p.name} price={p.price}/>
                })}
                </ul>
    </div>
  )
}

export default ComCombine3Object