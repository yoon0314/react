import React, { useState } from 'react'

const Event10 = () => {
   let initForm={ name:"",
        email:"",
        password:""}
   
    const[form,setForm]=useState(initForm)

    const handleChange= e => {
        const{name, value}=e.target
        setForm({...form,[name]:value})
    }


    const handleSubmit = e =>{
        e.preventDefault()
        alert(`가입완료 이름:${form.name}, 이메일: ${form.email}`)
        // setForm({name:"", email:"", password:""})
        setForm(initForm)}
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>회원가입폼</h2>
                <input name="name" value={form.name} onChange={handleChange} />
                <input name="email" value={form.email} onChange={handleChange} />
                <input name="password" value={form.password} onChange={handleChange} />
                <button type='submit'>가입하기</button>
            </form>
        </div>
    )
}

export default Event10