import React, { useState } from 'react'

const Event6 = () => {
    const [gender, setGender] =useState("")
    // const handleChange=(e)=>{
    //     console.log(e.target.value)
    //     setGender(e.target.value)
    
  return (
    <div>
        <h2>선택한 성별찾기-라디오</h2>
        <p>선택한 성별:</p>
        <label>
            <input type="radio" name='gender' value='남자' onChange={(e)=>setGender
                (e.target.value)
            } />남자
        </label>

        <label>
            <input type="radio" name='gender' value='여자' onChange={(e)=>setGender
                (e.target.value)
            }/>여자
        </label>
    </div>
  )
}

export default Event6