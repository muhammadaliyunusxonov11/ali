import React from 'react'
import Card from './card/Card'
import Cardfour from './cardfour/Cardfour'
import Cardthree from './cardthree/Cardthree'
import Cardtwo from './cardtwo/Cardtwo'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <h1 className='head-title'>
        НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ
        </h1>
        <button className='head-btn' type='button'>ПЕРЕЙТИ В КАТАЛОГ</button>
        <div className="head-fath">
          <Card/>
          <Cardtwo/>
          <Cardthree/>
          <Cardfour/>
        </div>
    </div>
    
  )
}

export default Header