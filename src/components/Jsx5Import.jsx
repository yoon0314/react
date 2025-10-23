import React from 'react'
import headerlogo from "./assets/headerlogo.png"

const Jsx5Import = () => {
  return (
    <div>
        <h2>Jsx - 외부이미지</h2>
        <p>이미지를 변수에 저장</p>
        <p><img src={headerlogo} alt="" /></p>
    </div>
  )
}

export default Jsx5Import