import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio'
import './portfolio.css'
import {portfolio} from '../../data'

function Portfolio() {
  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='portfolio-title'>Portfolio</h2>
      <div className='portfolio-proyects'>
        {portfolio.map(item=> <CardPortfolio key={item.id} titulo={item.nombre} link={item.link} repositorio={item.repositorio} img={item.img} tecnologias={item.tecnologias} descripcion={item.descripcion}/>)}
      </div>
    </section>
  )
}

export default Portfolio