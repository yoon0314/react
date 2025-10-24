import React, { useState } from 'react'

function Child({msg}){
    return(
        <div>
            <p>{msg}</p>
        </div>
    )
}

const StateUp0 = () => {
    const [msg,setMsg]=useState('안녕나부모')
  return (
    <div>
        <h2>부모가 가진 값 자식에게 전달</h2>
        <Child msg={msg}/>
    </div>
  )
}

export default StateUp0