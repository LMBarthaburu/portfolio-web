import React, { useState } from 'react';
import './navbar.css'
import favicon from '../../Assets/Img/favicon.png'
import Toggle from '../Toggle/Toggle';
import {CgMenuGridO, CgClose} from 'react-icons/cg'
import SocialMedia from '../SocialMedia/SocialMedia';



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
          <SocialMedia/>
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