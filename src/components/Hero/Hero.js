import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className='hero' id='home'>
      <div className='text'>
        <h4 className='hi'>Hi there! I am</h4>
        <h1 className='name'>Luis <span className='midle-name'> <br /> Miguel</span> Barthaburu</h1>
        <div className='list'>
          <div className='list-container'>
            <div className='list-item'>Web Developer</div>
            <div className='list-item'>Frontend Developer</div>
            <div className='list-item'>Backend Developer</div>
            <div className='list-item'>Full Stack Developer</div>
            <div className='list-item'>UI/UX Designer</div>
          </div>
        </div>
      </div>
      <div className='clippath'></div>
    </section>
  )
}

export default Hero