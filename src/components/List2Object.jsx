import React from 'react'

// 변수 컴포넌에 밖에, 안에 어디에 만들어도 상관없음
// 참조할 변수
const skillList = [
    { id: 1, title: "html", content: "홈페이지 구조를 나타낼때 사용" },
    { id: 2, title: "css", content: "홈페이지의 디자인을 할때 사용" },
    { id: 3, title: "javascript", content: "동적인 움직임을 구현할때" },
    { id: 4, title: "react", content: "실시간체크, 가상돔사요, 컴포넌트" }
]
const List2Object = () => {
    //1. 상태 변수 - 변경되는 변수
    return (
        <div>
            <h2>프론트엔드 스킬</h2>
            <ul className='skill-list'>
                {skillList.map(skill =>
                    <li key={skill.id}>
                        <h2>{skill.title}</h2>
                        <p>{skill.content}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default List2Object