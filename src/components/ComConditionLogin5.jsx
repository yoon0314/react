import React, { useState } from 'react'

const ComConditionLogin5 = () => {
    //1.상태변수
    const [login, setLogin] = useState(false);

    //2.변수를 변경 시킬수 있는 메서드
    const loginChange = () => {
        console.log("함수호출")
        setLogin(!login);
    }
    //3.화면에 붙일 내용
    return (
        <div>
            <h2>삼항조건연산자</h2>
            <p>{login ? "환영합니다" : "로그인이 필요합니다"}</p>
            <button onClick={loginChange}>{login ? "로그아웃" : "로그인"}</button>
        </div>
    )
}

export default ComConditionLogin5