import React from 'react'
import './Navbar.css'
import rasm from './logo.png'
import rasmtwo from './lupa.png'
import rasmthree from './korzina.png'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="nav-father">
            <img className='nav-img' src={rasm} alt="" />
            <p className="nav-text">КОМПАНИЯ</p>
            <p className="nav-texttwo">КАТАЛОГ</p>
            <p className="nav-textthree">УСЛУГИ</p>
            <p className="nav-textfour">ИНФОРМАЦИЯ</p>
            <p className="nav-textfive">КОНТАКТЫ</p>
            <button className='nav-btn' type='button'>ЗАКАЗАТЬ ЗВОНОК</button>
            <img className='nav-imgtwo' src={rasmtwo} alt="" />
            <img className='nav-imgthree' src={rasmthree} alt="" />
        </div>
    </div>
  )
}

export default Navbar