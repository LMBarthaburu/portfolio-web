import React, { useContext } from 'react'
import './toggle.css'
import {FaSun,FaMoon} from 'react-icons/fa'
import { ThemeContext } from '../../context'

function Toggle() {
  const theme = useContext(ThemeContext)
  const handleClick=()=>{
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <section className='toggle'onClick={handleClick}>
      <FaSun className='toggle-sun t-icon'/>
      <FaMoon className='toggle-moon t-icon'/>
      <div className={theme.state.darkMode? 't-button left' : 't-button right'}></div>
    </section>
  )
}

export default Toggle