import React from 'react'
import './cardPortfolio.css'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {FaGithub} from 'react-icons/fa'

function CardPortfolio(props) {
  return (
    <section className='portfolio-card'>
      <a href={props.link} target='_blank' rel='noreferrer' className='proyect-link'>
        <img src={props.img} alt="imagen proyecto" className='proyect-img'/>
      </a>
      <div className='text-container'>
        <h3 className='proyect-title'>{props.titulo}</h3>
        <h3 className='proyect-description'>{props.descripcion}</h3>
        <h5 className='proyect-tec'>{props.tecnologias}</h5>
        <div className='icon-box'>
          <a href={props.link} target='_blank' rel='noreferrer' className='proyect-link'>
            <HiOutlineExternalLink className='proyect-icon'/>
          </a>
          <a href={props.repositorio} target='_blank' rel='noreferrer' className='proyect-link'>
            <FaGithub className='proyect-icon'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CardPortfolio