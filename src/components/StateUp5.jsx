import React, { useState } from 'react'

function CheckBox({ label, onToggle }) {
    return (
        <div>
            <input type="checkBox" onChange={() => onToggle(label)} />{label}
        </div>
    )
}

const StateUp5 = () => {
    let arr = ['운동', '독서', '음악감상']
    const [check, setCheck] = useState([])
    const handleToggle = (label) => {
        if(check.includes(label)
        ){ setCheck(check.filter(item=>item!==label))}
    else{setCheck([...check,label])}
           
    }

    return (
        <div>
            <h2>체크박스</h2>
            <p>선택:{check}</p>
            <div>
                {arr.map((item, id) =>
                    <CheckBox key={id} label={item} onToggle={handleToggle} />
                )}
            </div>
        </div>
    )
}

export default StateUp5