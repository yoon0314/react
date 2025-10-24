import React from 'react'

function Child({onAlert}){
return(
    <div>
        <button onClick={onAlert}>경고창</button>
    </div>
)
}

const StateUp1 = () => {

    const handleAlert=()=>{
        alert('자식이 클릭 부모의 메서드 실행')
    }
  return (
    <div>
        <h2>state 끌어올리기</h2>
        <p>자식요소에서 이벤트 발생시 부모요소에서도 실행</p>
        <Child onAlert={handleAlert}/>
    </div>
  )
}

export default StateUp1