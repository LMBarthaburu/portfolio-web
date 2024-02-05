import React from 'react'
import './hero.css'
import 'animate.css';

function Hero() {
  return (
    <section className='hero text animate__animated animate__fadeIn' id='home'>
      <div className='clippath-hero'></div>
      <div className='text animate__animated animate__fadeIn animate__delay-2s'>
        <h1 className='name'>Luis Barthaburu</h1>
        {/* <div className='list'>
          <div className='list-container'>
            <div className='list-item'>Web Developer</div>
            <div className='list-item'>Frontend Developer</div>
            <div className='list-item'>Backend Developer</div>
            <div className='list-item'>Full Stack Developer</div>
            <div className='list-item'>UI/UX Designer</div>
          </div>
        </div> */}
        <div>
        <h2 className='hero-skill text animate__animated animate__fadeIn animate__delay-3s'>WEB <br />DESIGNER & <br /> <span className='hero-skill text animate__animated animate__fadeIn animate__delay-4s'>FRONT-END <br />DEVELOPER</span></h2>

        </div>
      </div>
      <div className='clippath animate__animated animate__fadeIn animate__delay-1s '></div>
    </section>
  )
}

export default Hero