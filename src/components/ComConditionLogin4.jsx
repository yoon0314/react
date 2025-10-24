import React, { useState } from 'react'
//로그인 상태를 나타낼 컴포넌트
function Login() {
    return (
        <div>
            <button>로그아웃</button>
            <p>홍길동님 환영합니다</p>
        </div>
    )
}
//로그아웃 상태를 나타낼 컴포넌트
function Logout() {
    return (
        <div>
            <button>로그인</button>
        </div>
    )
}

const ComConditionLogin4 = () => {
    //1. 상태변수를 선언하기
    let [login, setLogin] = useState(true);

    //2. 상태변수를 변경할 메서드

    //3. DOM붙일 내용
    return (
        <div>
            <h2>로그인 예제</h2>
            {/* 변수를 선언하여 그 변수안에  true이면 
        로그인 상태를 보여주고
        -> 버튼은 "로그아웃" 사용자이름 보여주고 
        false 로그아웃 상태 보여주고
        -> 버튼은 "로그인"  */}
            {login ? <Login /> : <Logout />}
        </div>
    )
}

export default ComConditionLogin4