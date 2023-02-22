import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul>
        {/*TODO: Add Logo*/}
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
