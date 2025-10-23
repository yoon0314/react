import React from 'react'
//상품의 목룍을 표시해줄 컴포넌트
function GoodItem({ kind, isHas }) {
    if(isHas){
        return(
            <li>{kind}</li>)
    }
    else{
        return(
            <li>{kind} <span>품절</span></li>)
    }
}

const ComCondition3 = () => {
    return (
        <div>
            <h2>상품출력하기</h2>
            <ul>
                <GoodItem kind="자켓" isHas={true} />
                <GoodItem kind="상의" isHas={false} />
                <GoodItem kind="하의" isHas={false} />
            </ul>
        </div>
    )
}

export default ComCondition3