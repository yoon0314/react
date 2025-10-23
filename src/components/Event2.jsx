import React, { useState } from 'react'

const Event2 = () => {
    let[count, setCount]=useState(0)
    let num = 0
    const handleClick=()=>{
        setCount(count+1);
        num++;
    }
    return (
        <div>
            <h2>값 변경</h2>
            <p>일반변수:{num}</p>
            <p>상태변수:{count}</p>
            <button onClick={handleClick}>증가</button>
        </div>
    )
}

export default Event2