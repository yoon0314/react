import React, { useState } from 'react'
import List6Filter from './List6Filter'

const Event11 = () => {
    const [items, setItem] = useState([])
    const [input, setInput] = useState("")

    const addItem = () => {
        setItem([...items, input])
        setInput("")
    }

    const handleKey = e => {
        if (e.key === "Enter") { addItem() }
    }
    return (
        <div>
            <h2>리스트 추가하기</h2>
            <p>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey} />
                <button onClick={addItem}>추가</button>
            </p>
            <ul>
                {items.map((item, id) => <li key={id}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Event11