import React from 'react'
import './Cardfour.css'
import nn from './groupt.png'
import nnn from './Union.png'
function Cardfour() {
  return (
    <div className='cardfour'>
        <img className='cardfour-img' src={nn} alt="" />
        <p className="cardfour-text">Мы всегда на связи
с 9:00 до 18:00!</p>
<img className='cardfour-imgtwo' src={nnn} alt="" />
    </div>
  )
}

export default Cardfour