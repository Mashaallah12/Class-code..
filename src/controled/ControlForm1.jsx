import React, { useState } from 'react'
import './control.css'
const ControlForm1 = () => {
    const [userName, setUser] = useState('')
    const [UserEmail, setEmail] = useState('')
    const [UserPass, setPass] = useState('')
    function userNameHandler(event) {
        setUser(event.target.value)
        // console.log(event.target.value)
        
    }
    function userEmailHandler(event) {
        setEmail(event.target.value)
        
    }
    function userPassHandler(event) {
        setPass(event.target.value)
        
    }
    function onSubmitHandler(event) {
        event.preventDefault();

        const productData = {
            name:userName,
            password:UserPass,
            email:UserEmail
            
            // new3:userPassword,
        }
        console.log(productData);
        setUser('');
        setEmail('');
        setPass('');
    }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Controled Form</h1>
        <br />
        <label>UserName</label>
        <input type="text" value={userName} onChange={userNameHandler}/>
        <br />
        <br />
        <label>UserEmail</label>
        <input type="email" value={UserEmail} onChange={userEmailHandler}/>
        <br />
        <br />
        <label>Password</label>
        <input type="password" value={UserEmail} onChange={userPassHandler}/>
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default ControlForm1
