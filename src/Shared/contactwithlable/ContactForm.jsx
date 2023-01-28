import React from 'react'
import './Contactform.css'
// import Lable from '../Lable/Lable'
const ContactForm = ({ inputType, placeHolder, Lable }) => {
  return (
    <div>
      <form>
        <h3> {Lable}</h3>
        <div className='contactForm-container'>
          <input className='Input-Container' type={inputType} placeholder={placeHolder} />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
