import React, { useState } from 'react'

const Event4 = () => {
  //input에 입력한 값을 저장할 변수
const [text, setText] =useState("")
  //상태변수의 값을 변경할 메서드 또는 기타 스크립트
  
  
    return (
    <div>
        <h2>change event</h2>
        <p>input 글자 입력, 라이도, 체크박스 변경, 샐랙트박스 옵션 변경</p>
        <input type="text" placeholder='이름을 입력하세요' onChange={(e)=>setText(e.target.value)}/>
        <p>입력한값:{text}</p>
    </div>
  )
}

export default Event4