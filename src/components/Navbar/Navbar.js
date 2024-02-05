import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './navbar.css'
import favicon from '../../Assets/Img/favicon.png'
import Toggle from '../Toggle/Toggle';
import {CgMenuGridO, CgClose} from 'react-icons/cg'



function Navbar() {
  const [display, setDisplay] = useState(false)

  const handleClick =()=>{
    setDisplay(current => !current)
  }
  const [active, setActive] = useState('');

  const handleSetActive = (e) => {
    setActive(e.target.id);
  };
  return (
    <section>
      <div className='menu-hamb'  onClick={handleClick}>
        {display? <CgClose className='menu-icon'/> : <CgMenuGridO className='menu-icon'/>}    
      </div>
      <div  className={display? 'header' : 'display'}>
        <div className='logo'>
          <img src={favicon} alt="imagen navabr" className='favicon' />
          <a className="logo" href="#home">LMB<span>W</span>eb<span>D</span>ev</a>
          <div className='social-media'>
            <a href="https://www.linkedin.com/in/luis-miguel-barthaburu-/" target="_blank" rel='noreferrer'><FaLinkedin/></a>
            <a href="https://github.com/LMBarthaburu" target="_blank" rel='noreferrer'><FaGithub/></a>
            <a href="https://www.instagram.com/lmbarthaburu/" target="_blank" rel='noreferrer'><FaInstagram/></a>
            <a href="https://www.facebook.com/luis.barthaburu/" target="_blank"  rel='noreferrer'><FaFacebook/></a>
          </div>
        </div>
        <nav className="navbar">
          <a href="/#home" id="nav-home" className={`nav-item ${active === 'nav-home' ? 'active' : ''}`} onClick={(e) => {handleSetActive(e); handleClick()}}>Home</a>
          <a href="/#about" id="nav-about" className={`nav-item ${active === 'nav-about' ? 'active' : ''}`} onClick={(e) => {handleSetActive(e); handleClick()}}>About</a>
          <a href="/#portfolio" id="nav-portfolio" className={`nav-item ${active === 'nav-portfolio' ? 'active' : ''}`} onClick={(e) => {handleSetActive(e); handleClick()}}>Portfolio</a>
          <a href="/#contact" id="nav-contact" className={`nav-item ${active === 'nav-contact' ? 'active' : ''}`} onClick={(e) => {handleSetActive(e); handleClick()}}>Contact</a>
        </nav>
        <div className="dark-mode">
          <Toggle/>
        </div>
      </div>
    </section>
  )
}

export default Navbar