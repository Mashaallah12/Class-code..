import React, { useState } from 'react'

const ControledForms2 = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    function handleChange(e) {
       let {name, value} = e.target;
       setFormData({...formData, [name]: value} )
    }
    function formSubmit(e) {
        e.preventDefault();
        console.log(formData)
        
    }
  return (
    <div>
      <form onSubmit={formSubmit}>
      <h1>Controled Form</h1>
        <br />
        <label>UserEmail</label>
        <input type="email" value={formData.email} onChange={handleChange} name='email'/>
        <br />
        <br />
        <label>Password</label>
        <input type="text" value={formData.password} onChange={handleChange} name='password'/>
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default ControledForms2
