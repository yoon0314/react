import React, { useState } from 'react'

const List7Filter = () => {
    //상태변수
    const [lists, setList] = useState(['A', 'B', 'C'])
    //상태변수를 변경해줄 메서드
    const removeItem=(item)=>{
        console.log('삭제')
        setList(lists.filter(i=>i !==item))
    }
    //화면에 보여줄 내용
    return (
        <div>
            <h2>리스트 항목 삭제</h2>
            <ul>
                {lists.map((item, id) =>
                    <li key={id}>{item} <button onClick={()=>removeItem(item)}>삭제</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default List7Filter