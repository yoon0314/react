import React, { useState } from 'react'

const ComConditionLogin = () => {
    let [isToggle,setToggle]=useState(true)
    let [isLogin,setLogin]=useState(false)
let toggle=()=>{
    setToggle(prev=>!prev)
    setLogin(l =>!l)
}

  return (
    <div>
        <h2>로그인 예제</h2>
        <p>{setLogin?"안녕히가세요":"홍길동님환영합니다"}</p>
        <button onClick={toggle}>{isToggle?"로그인":"로그아웃"}</button>
        
    </div>)

    

  
        
}

export default ComConditionLogin