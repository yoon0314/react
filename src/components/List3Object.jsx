import React from 'react'
import { drinks } from "../data/Data";
import DrinkList from './DrinkList';

const List3Object = () => {
    return (
        <div>
            <h2>음료 리스트</h2>
            <ul className='drink-list'>
                {drinks.map(drink =>
                    <DrinkList
                        key={drink.id}
                        name={drink.name}
                        img={drink.imageId}
                        cont={drink.accomplishment} />
                )}
            </ul>
        </div>
    )
}

export default List3Object