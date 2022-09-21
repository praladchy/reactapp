import React from 'react'
import './Button.css'
const Button = ({icon}) => {
  return (
    <div className='button-container'>
      <div className='search-container'>


       <button>{icon}</button>
       
      


      </div>

    </div >
  )
}

export default Button