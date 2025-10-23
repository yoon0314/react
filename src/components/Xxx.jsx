import React, { useState } from 'react'

//로그인 상태를 나타낼 컴포넌트
function Login(){
    return(
        <div>
            <button>로그아웃</button>
            <p>홍길동님 환영합니다</p>
        </div>
    )
}

//로그아웃 상태를 나타낼 컴포넌트
function Logout(){
     return(
        <div>
            <button>로그인</button>
            <p>로그아웃되었습니다</p>
        </div>
    )
}



const Xxx = () => {
    let[Lin, setLin] = useState(true)
  return (
    <div>
        <h2>로그인예제</h2>
        {Lin?<Login/>:<Logout/>}
    </div>
  )
}

export default Xxx