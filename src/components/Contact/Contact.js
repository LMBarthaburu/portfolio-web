import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import CV from '../../Assets/CV/cv-LuisMiguelBarthaburu.pdf'

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
      <h2 className='contact-title'>Contáctame!</h2>
      <div className='text-form'>
        {/* <h4 className='contact-subtitle'>Si te gusto mi trabajo no dudes en contactarme!</h4> */}
        <form ref={formRef} onSubmit={handleSubmit} className='contact-form' id='formulario'>
          <label className='form-lable'>Nombre completo</label>
          <input type="text" placeholder='Nombre completo' name='user_name' className='form-input'required/>
          <label className='form-lable'>Asunto</label>
          <input type="text" placeholder='Motivo del contacto' name='user_subject' className='form-input'required/>        
          <label className='form-lable'>E-mail</label>
          <input type="email" placeholder='Email' name='user_email' className='form-input'required/>
          <label className='form-lable'>Mensaje</label>
          <textarea id="" placeholder='Describe brevemente tu proyecto' name='message' rows="5" className='form-text-area'required></textarea>
          <div>
            <button className='form-btn'>Enviar</button>
            <a href={CV} download="LuisMiguelBarthaburu-CV.pdf" className='form-cv'>Descargar CV</a>
          </div>
          {done && <p className='sent-msg'>Mensaje enviado!</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact