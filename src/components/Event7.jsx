import React, { useState } from 'react'

const Event7 = () => {
  const [fruit, setFruit] = useState("")
  
    return (
    <div>
        <h2>셀렉트</h2>
<p>선택한 과일은 :</p>
        <select onChange={(e)=>setFruit(e.target.value)}>
            <option value="사과">사과</option>
            <option value="바나나">바나나</option>
            <option value="오렌지">오렌지</option>
            <option value="배">배</option>
            <option value="감">감</option>
        </select>
    </div>
  )
}

export default Event7