import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactForm from '../../Shared/contactwithlable/ContactForm'
import Lable from '../../Shared/Lable/Lable'
import './Contacts.css'
const Contacts = () => {
  return (
    <div>
      <div className='contact-main-container'>
        <Lable Lable='Contact Us' />
        <div className='contact-filed-contact-Form-container'>
          <div className='contact-container'>
            <div className='Name-container'>
              <ContactForm Lable={'FirstName'} inputType={'text'} placeHolder={'Name'} />
            </div>
            <div className='Last-name-container'>
              <ContactForm Lable={'LastName'} inputType={'text'} placeHolder={'LastName'} />
            </div>
            <div className='telphone-container'>
              <ContactForm Lable={'Telephone'} inputType={'number'} placeHolder={'Telephone number'} />
            </div>
            <div className='Email-container'>
              <ContactForm Lable={'Email'} inputType={'email'} placeHolder={'Email'} />
            </div>
          </div>
        </div>
        <div>
          <Lable Lable='message' />

          <textarea placeholder='message' className='textarea-container'></textarea>
        </div>
        <div className='Submit-Form-Container'>
          <NavLink to="/"><button className='Submit-Form-Container'>submit</button></NavLink>

        </div>
      </div>
    </div>
  )
}

export default Contacts