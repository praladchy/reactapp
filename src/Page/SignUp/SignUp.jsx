import React from 'react'
// import { Routing } from '../../Routings/Routing'
// import { NavLink } from 'react-router-dom'
import Lable from '../../Shared/Lable/Lable'
import "./Signup.css"
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const history=useNavigate()

  const handleSignUp=async(e)=>{
    e.preventDefault()
   const response=await fetch('http://localhost:8000/api/user/sign-up',{
      method:'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username:username,password:password,email:email})
    })
    console.log(response.status,'response')
   if(response.status===201){
    history('/login')
   }
   if(response.status===400){
    console.log(response.Response)
   }
  }

  return (
    <div className='Signup-Main-Container'>
      <div className='Signup-Sub-Container'>
        <h2><Lable Lable='Signup' /></h2>
        <div className='Signup-Container'>
          <div className='Signup-UserName-Container'>
            <h4>UserName</h4>
            <input className='Input-Container'
             type="text"
              placeholder='UserName '
              onChange={(e)=>setUsername(e.target.value)}
               />
          </div>
          <div className='Signup-Email-Container'>
            <h4>Email</h4>
            <input className='Input-Container'
             type="email"
              placeholder='Example@gmail.com'
              onChange={(e)=>setEmail(e.target.value)}
              />
          </div>
          <div className='Signup-Password-Container'>
            <h4>Password</h4>
            <input 
            className='Input-Container'
             type="password" 
             placeholder='Password' 
             onChange={(e)=>setPassword(e.target.value)}
             />
          </div>
          <div className='Signup-Cancle-Button-container'>
            <div className='Signup-button-Container' >
               <button className='button-Container'onClick={handleSignUp}>Create</button>
            </div>
            <div className='Cancle-button-Container'>
            <button className='button-Container'>Cancle</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp