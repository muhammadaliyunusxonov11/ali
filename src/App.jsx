import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default App