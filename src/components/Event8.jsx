import React, { useState } from 'react'

const Event8 = () => {
    const [text,setText] =useState("")
    const habdleSubmit=e=>{e.preventDefault()
       alert(`입력한 내용은 ${text}`) 
       setText("")
       //기존이벤트 막기-내가할이벤트-내용비워주기
    }
    
  return (
    <div>
        <h2>form submit</h2>
        <form onSubmit={habdleSubmit}> 
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <input type="submit" value='제출' />
        </form>
    </div>
  )
}

export default Event8