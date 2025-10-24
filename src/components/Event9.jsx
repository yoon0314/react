import React, { useState } from 'react'

const Event9 = () => {
    const [form,setForm]=useState({uname:"", email:""})
    const handleSubmit=e=>{
        // let name=e.target.name
        // let value=e.target.value
        // const newForm={uname:form.uname,email:form.email}
        // newForm[name]=value
        // setForm(newForm)

        const {name,value}=e.target
        setForm((prev)=>({...prev,[name]:value}))
    }
    return (
        <div>
            <h2>Multi Input</h2>
            <input type="text" name='uname' value={form.uname } onChange={handleSubmit } />
            <input type="email" name='email' value={form.email } onChange={handleSubmit } />
        </div>
    )
}

export default Event9