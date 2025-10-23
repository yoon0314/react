import React from 'react'

const Event3 = () => {
   const handleOver=()=>{
console.log('마우스가 들어갔습니다')
    }

   const handleOut=()=>{
console.log('마우스가 벗어낫습니다')
    }
  return (
    <div onMouseOver={handleOver} onMouseOut={handleOut}>
        <h2>마우스 오버 아웃</h2>
        <p>마우스를 올려보세요</p>
    </div>
  )
}

export default Event3