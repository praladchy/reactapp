import React from 'react'
// import { Routing } from '../../Routings/Routing'
import { NavLink } from 'react-router-dom'
import Lable from '../../Shared/Lable/Lable'
import "./Signup.css"

const Home = () => {
  return (
    <div className='Signup-Main-Container'>
      <div className='Signup-Sub-Container'>
        <h2><Lable Lable='Signup' /></h2>
        <div className='Signup-Container'>
          <div className='Signup-UserName-Container'>
            <h4>UserName</h4>
            <input className='Input-Container' type="text" placeholder='UserName ' />
          </div>
          <div className='Signup-Email-Container'>
            <h4>Email</h4>
            <input className='Input-Container' type="email" placeholder='Example@gmail.com' />
          </div>
          <div className='Signup-Password-Container'>
            <h4>Password</h4>
            <input className='Input-Container' type="password" placeholder='Password' />
          </div>
          <div className='Signup-Cancle-Button-container'>
            <div className='Signup-button-Container' >
              <NavLink to="/"> <button className='button-Container'>Create</button></NavLink>
            </div>
            <div className='Cancle-button-Container'>
              <NavLink to="/"><button className='button-Container'>Cancle</button></NavLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home