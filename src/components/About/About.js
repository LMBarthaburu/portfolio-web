import React from 'react'
import './about.css'
import {GiWorld, GiConversation} from 'react-icons/gi'
import { FaGraduationCap} from 'react-icons/fa'
import Languages from '../Languages/Languages'

function About() {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <h2 className='about-title'>About me!</h2>
        <h3 className='about-text'>I am a Frontend developer from Tucumán Argentina, open to work remotely for any part of the world!</h3>
        <div className='about-container'>
          <div className='about-item'>
            <GiWorld className='about-item-logo'/>
            <h5 className='about-item-title'>Location:</h5>
            <h5 className='about-item-text'>Tucumán - ARG</h5>
          </div>
          <div className='about-item'>
          <GiConversation className='about-item-logo'/>
            <h5 className='about-item-title'>Languages:</h5>
            <h5 className='about-item-text'>Spanish - English</h5>
          </div>
          <div className='about-item'>
          <FaGraduationCap className='about-item-logo'/>
            <h5 className='about-item-title'>College Degree:</h5>
            <h5 className='about-item-text'>Business Adm.</h5>
          </div>
        </div>
      </div>
      <div className='stack-container'>
        <div className='stack-box'>
          <h3 className='about-text'> Skills </h3>
          <Languages/>
        </div>
      </div>
    </section>
  )
}

export default About