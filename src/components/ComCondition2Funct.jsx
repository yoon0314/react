import React, { useState } from 'react'

const ComCondition2Funct = () => {
    //상태변수저장: 이전에는 사용할수 없었음. useState 를 사용하여 가능
    // let [상태변수, 변수를변경할메서드] = useState(값)
    let[isToggle,setToggle]=useState(true)
    let[count,setCount]=useState(1)
    //메서드선언
let toggle = () =>{
    console.log("호출")
    setToggle(prev=>!prev)
    setCount(c =>c+1)
}
    //붙일내용(DOM구조)
  return (
    <div>
        <p>버튼을 클릭하세요</p>
        <p>{count}</p>
        <button onClick={toggle}>{isToggle?"ON":"OFF"}</button>
    </div>
  )
}

export default ComCondition2Funct