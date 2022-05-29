import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import CV from '../../Assets/CV/Luis Miguel Barthaburu.pdf'

function Contact() {
  const formRef = useRef()
  const [done, setDone]=useState(false)


  const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_8tdaifk','template_49fw0gw', formRef.current,'vJbZavf4-K6WsutXR')
    setDone(true)
    const formulario =document.getElementById('formulario')
    formulario.reset()
  }


  return (
    <section className='contact' id='contact'>
      <div className='clippath-form'></div>
      <h2 className='contact-title'>Contact Form</h2>
      <div className='text-form'>
        <h4 className='contact-subtitle'>If you like my work contact me!</h4>
        <form ref={formRef} onSubmit={handleSubmit} className='contact-form' id='formulario'>
          <label className='form-lable'>Full Name</label>
          <input type="text" placeholder='Name' name='user_name' className='form-input'required/>
          <label className='form-lable'>Subject</label>
          <input type="text" placeholder='Subject' name='user_subject' className='form-input'required/>        
          <label className='form-lable'>E-mail</label>
          <input type="email" placeholder='Email' name='user_email' className='form-input'required/>
          <label className='form-lable'>Message</label>
          <textarea id="" placeholder='Message' name='message' rows="5" className='form-text-area'required></textarea>
          <div>
            <button className='form-btn'>Submit</button>
            <a href={CV} download="LuisMiguelBarthaburu-CV.pdf" className='form-cv'>Download CV</a>
          </div>
          {done && <p className='sent-msg'>Mensaje enviado con exito!!</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact