import React from 'react'
import './button.css'

const ButtonWithIcon = ({icon}) => {
  return (
    <div className='button-container'>
      <div className='search-icon-container'>


       <button>{icon}</button>
       
      


      </div>

    </div >
  )
}

export {ButtonWithIcon}