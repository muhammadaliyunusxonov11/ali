import React from 'react'
import './Cardtwo.css'
import ras from './rasm.png'
function Cardtwo() {
  return (
    <div className='cardtwo'>
        <img className='cardtwo-img' src={ras} alt="" />
        <p className="cardtwo-text">Техническая помощь и консультация</p>
    </div>
  )
}

export default Cardtwo