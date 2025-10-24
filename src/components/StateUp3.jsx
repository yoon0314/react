import React, { useState } from 'react'

function Child({name, setChange}) {
    return (
        <div>
            <input value={name} onChange={e=>setChange(e.target.value)}/>
        </div>
    )
}

const StateUp3 = () => {
    const [name, setName] = useState("")
    return (
        <div>
            <h2>자식 인풋 부모가 데이터 관리</h2>
            <p>입력한 이름은: {name}</p>
            <Child name={name} setChange={setName}/>
        </div>
    )
}

//setChange 은 마음대로 작명

export default StateUp3