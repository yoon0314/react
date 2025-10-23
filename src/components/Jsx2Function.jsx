import React from 'react'

//일반함수 만들기
function greeting(){
    return "리엑트는 재미있어요"
}

const Jsx2Function = () => {
  return (
    <div>
        <h2>jsx - 함수 호출하기</h2>
        <p><strong>{greeting()}</strong></p>
    </div>
  )
}

export default Jsx2Function