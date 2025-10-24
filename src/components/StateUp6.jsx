import React, { useState } from 'react'

function Button({walks, onToggle}){
    return(
        <div>
            <button onClick={onToggle}>{walks?"stop":"walk"}</button>
        </div>
    )
}

const StateUp6 = () => {
    const [walk,setwalk]=useState(false)
    const toggle=()=>{setwalk(!walk)}
  return (
    <div>
        <Button walks={walk} onToggle={toggle}/>
        <h2>{walk?"walk":"stop"}</h2>
    </div>
  )
}

export default StateUp6