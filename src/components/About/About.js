import React from 'react'
import './about.css'
import {GiWorld, GiConversation} from 'react-icons/gi'
import { FaGraduationCap} from 'react-icons/fa'
import Languages from '../Languages/Languages'

function About() {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <h2 className='about-title'>Sobre mi!</h2>
        <h3 className='about-text'>Programador web con conocimientos de diseño. Experiencia en el desarrollo de aplicaciones web utilizando el Stack MERN (MongoDB, Express, React y Node.js). Apasionado por la creación de sitios web y aplicaciones que sean fáciles de usar y visualmente atractivas.</h3>
        <div className='about-container'>
          <div className='about-item'>
            <GiWorld className='about-item-logo'/>
            <h5 className='about-item-title'>Ubicación:</h5>
            <h5 className='about-item-text'>Granada - ESP</h5>
          </div>
          <div className='about-item'>
          <GiConversation className='about-item-logo'/>
            <h5 className='about-item-title'>Idiomas:</h5>
            <h5 className='about-item-text'>Español - Ingles</h5>
          </div>
          <div className='about-item'>
          <FaGraduationCap className='about-item-logo'/>
            <h5 className='about-item-title'>Titulación:</h5>
            <h5 className='about-item-text'>Adm. de Empresas</h5>
          </div>
        </div>
      </div>
      <div className='stack-container'>
        <div className='stack-box'>
          <h3 className='about-text'> Lenguajes/Skills </h3>
          <Languages/>
        </div>
      </div>
    </section>
  )
}

export default About