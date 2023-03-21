import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@hooks/useMediaQuery';
import styles from './Nav.module.scss';
import cn from 'classnames';

function Nav() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileStyles = cn(styles.mobile, {
    [styles.open]: isMobileOpen,
  });

  const desktopNav = (
    <nav className={styles.desktop}>
      <Link to='/'>
        <img src='./icons/nav-logo.png' alt='Little Lemon Logo' height={50} />
      </Link>
      <ul>
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
  );

  const MobileNav = () => (
    <nav className={mobileStyles}>
      <ul>
        <li>
          <Link to='/' onClick={() => setIsMobileOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={() => setIsMobileOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to='/menu' onClick={() => setIsMobileOpen(false)}>
            Menu
          </Link>
        </li>
        <li>
          <Link to='/Reservations' onClick={() => setIsMobileOpen(false)}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to='/order-online' onClick={() => setIsMobileOpen(false)}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to='/Login' onClick={() => setIsMobileOpen(false)}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className={styles.nav}>
      {isMobile ? (
        <>
          <button className={styles['menu-button']} onClick={() => setIsMobileOpen(!isMobileOpen)}>
            <Link to='/'>
              <img
                src='/icons/menu-icon.svg'
                alt='Menu icon'
                style={{ padding: '10px' }}
                width={50}
                height={50}
              />
            </Link>
          </button>
          {<MobileNav />}
        </>
      ) : (
        desktopNav
      )}
    </div>
  );
}

export default Nav;
