import React from 'react'

const List1 = () => {
    //1. 배열 만들기
    let fruits = ["사과", "배", "바나나"]
    
    //3. 붙일내용
    return (
        <div>
            <h2>리스트 보여주기 </h2>
            <p>배열에 데이터를 조작하여 새롭게 만들기</p>
            <p>배열 데이터를 li 목록으로 만들기</p>
            <ul>
                {/* map 배열명.map((배열데이터저장변수,순서저장변수,배열명) => 실행할문장)
                배열명.map(()=>{
                    return 반환값
                    })
                */}
                {/* 배열데이터를 렌더링할때는 반드시 key값을 속성으로 넣어야한다 */}
                {fruits.map((item, id) => 
                <li key={id}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default List1