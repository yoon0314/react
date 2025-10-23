import React from 'react'
const users = [
    { id: 1, name: '홍길동', gender: true },
    { id: 2, name: '이영희', gender: false },
    { id: 3, name: '이나라', gender: false },
    { id: 4, name: '짱구', gender: true }
]
const manUsers = users.filter((user) =>  user.gender) 

const List6Filter = () => {
    return (
        <div>
            <h2>리스트필터</h2>
            <p>조건에 맞는 요소 추출</p>
            <ul>
                {manUsers.map(man =>
                    <li key={man.id}>{man.name}</li>
                )}
            </ul>
        </div>
    )
}

export default List6Filter