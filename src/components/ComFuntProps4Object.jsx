import React from 'react'

const ComFuntProps4Object = (props) => {
  return (
    <div>
        <h2>부모의 객체값 전달받기</h2>
        <h3>{props.users.name}</h3>
        <p><img src={props.users.imageUrl} width={props.users.imageSize}alt="" /></p>
    </div>
  )
}

export default ComFuntProps4Object