import React from 'react'
import { Link } from 'react-router-dom'
import useIsMobile from '@hooks/useIsMobile'

function Nav() {
  const isMobile = useIsMobile()

  return (
    <nav>
      <ul>
        <img src='./icons/little-lemon-logo.png' alt='Little Lemon Logo' />
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/Reservations'>Reservations</Link>
        </li>
        <li>
          <Link to='/order-online'>Order Online</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
