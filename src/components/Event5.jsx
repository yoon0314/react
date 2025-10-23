import React, { useState } from 'react'


const Event5 = () => {
let [checked, setCheck]=useState("")

  return (
    <div>
        <h2>체크박스</h2>
        <label>
            <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}/>
            약관에 동의합니다
        </label>
        <p>{checked?'동의함':'동의안함'}</p>
    </div>
  )
}

export default Event5