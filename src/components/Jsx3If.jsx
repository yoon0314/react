import React from 'react'

const Jsx3If = () => {
    const isLogin=true
  return (
    <div>
        <h2>Jsx에서 조건문</h2>
        <p>상항조건연산자</p>
        <p>조건?조건참:조건거짓</p>
        <h3>{isLogin?"홍길동환영합니다":"로그인이필요합니다"}</h3>
    </div>
  )
}

export default Jsx3If