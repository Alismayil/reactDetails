import React from 'react'
import './heades.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <Link to='/' className='a'>Home</Link>
      <Link to='/contact' className='a'>Contact</Link>
    </div>
  )
}

export default Header