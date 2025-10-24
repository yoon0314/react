import React from 'react'

const RecipeList = ({ id, name, ing }) => {
    return (
        <li>
            <h3>음식의 종류 : {id}</h3>
            <p>음식명 : {name}</p>
            {/* <p><span>재료1</span><span>재료2</span></p> */}
            <p>
                {ing.map((item,id) =>
                    <span key={id}>{item}</span>
                )}
            </p>
        </li>
    )
}

export default RecipeList