import React from 'react'
import './Contactform.css'
// import Lable from '../Lable/Lable'
const ContactForm = ({inputType,placeHolder,Lable}) => {
  return (
    <div>
      <form>
        <h3> {Lable}</h3>
        <input className='contactForm-container' type={inputType} placeholder={placeHolder}/>
      </form>
    </div>
  )
}

export default ContactForm
