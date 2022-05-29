import React from 'react'
import './languages.css'
import {FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGithub, FaFigma} from 'react-icons/fa'
import {SiJavascript, SiMongodb} from 'react-icons/si'

function Languages() {
  return (
    <section className='skills'>
      <div className='skills-item'>
        <FaHtml5 className='skills-logo'/>
        <p>HTML</p>
      </div>
      <div className='skills-item'>
        <FaCss3Alt className='skills-logo'/>
        <p>CSS</p>
      </div>
      <div className='skills-item'>
        <SiJavascript className='skills-logo'/>
        <p>Javascript</p>
      </div>
      <div className='skills-item'>
        <FaReact className='skills-logo'/>
        <p>React</p>
      </div>
      <div className='skills-item'>
        <FaBootstrap className='skills-logo'/>
        <p>Bootstrap</p>
      </div>
      <div className='skills-item'>
        <FaNodeJs className='skills-logo'/>
        <p>Node</p>
      </div>
      <div className='skills-item'>
        <SiMongodb className='skills-logo'/>
        <p>Mongo</p>
      </div>
      <div className='skills-item'>
        <FaGithub className='skills-logo'/>
        <p>GitHub</p>
      </div>
      <div className='skills-item'>
        <FaFigma className='skills-logo'/>
        <p>Figma</p>
      </div>
    </section>
  )
}

export default Languages