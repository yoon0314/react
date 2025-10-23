import React from 'react'

const Event1 = () => {
//   function handleClick(e){
//     console.log('클릭되었습니다')
//     console.log(e)
//   }

const handleClick = (e) =>{
    console.log(e)
}
  
    return (
    <div>
        <h2>Event1</h2>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Event1