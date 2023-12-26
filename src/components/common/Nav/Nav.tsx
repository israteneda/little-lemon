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
        <img src='/icons/nav-logo.png' alt='Little Lemon Logo' height={50} />
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/reservation'>Book a table</Link>
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
          <Link to='/reservation' onClick={() => setIsMobileOpen(false)}>
            Book a table
          </Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className={styles.nav}>
      {isMobile ? (
        <>
          <button aria-label="Open Mobile Navigation" className={styles['menu-button']} onClick={() => setIsMobileOpen(!isMobileOpen)}>
            <img src='/icons/menu-icon.svg' alt='Menu icon' style={{ padding: '10px' }} width={40} height={40} />
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
