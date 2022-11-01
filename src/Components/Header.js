import React from 'react'
import logo from '../assets/logo.png'
import browse from '../assets/logo.svg'
import burger from '../assets/hamburger.svg'
import person from '../assets/person.svg'

function Header() {
  return (
    <div className='header'>
      <div className="left-div">
        <img className='logo' src={logo} alt="logo"/>
      </div>
      <div className="right-div">
        <p>Become a host</p>
        <img className='browse' src={browse} alt="browse" />
        <div className="burger-person">
          <img className='burger' src={burger} alt="burger" />
          <img className='person' src={person} alt="person" />
        </div>
      </div>
    </div>
  )
}

export default Header