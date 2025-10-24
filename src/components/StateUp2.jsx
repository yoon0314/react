import React, { useState } from 'react'

function Child({ changeClick }) {
    return (
        <div>
            <button onClick={changeClick}>변경</button>
        </div>
    )
}

const StateUp2 = () => {
    const [msg, setMsg] = useState('나는부모')
    const handleMsg = () => {
        setMsg('자식이 보낸 메세지')
    }

    return (
        <div>
            <h2>부모의 상태 함수 전달</h2>
            <p>{msg}</p>
            <Child changeClick={handleMsg} />
        </div>
    )
}
//changeClick 은 마음대로 작명
export default StateUp2