import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import Lable from '../../Shared/Lable/Lable'
import './Login.css'
const About = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
    const response = fetch("http://localhost:8000/api/user/sign-in", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    console.log(response, 'response')
  };
  return (


    <div>
      <div className='Login-main-Container'>
        <h2><Lable Lable='Login' /></h2>
        <div className='Login-Container'>
          <form action="" onSubmit={submitForm}>
            <div className='Login-UserName-Container'>
              <h4><Lable Lable='UserName' /></h4>
              <input className='Input-Container' value={email} type="text,email" placeholder='UserName or Email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='Login-Password-Container'>
              <h4><Lable Lable='Password' /></h4>
              <input className='Input-Container' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='Login-Cancle-Button-container'>
              <div className='Login-button-Container'>
                <button className='button-Container' type="submit" >Login</button>
              </div>
              <div className='Cancle-button-Container'>
                <button className='button-Container' >Cancle</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default About