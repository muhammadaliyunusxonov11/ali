import React from 'react'
import './Card.css'
import img from './ico.png'
function Card() {
  return (
    <div className='card'>
        <img className='card-img' src={img} alt="" />
        <p className="card-text">Наличный и безналичный расчет</p>
    </div>
  )
}

export default Card