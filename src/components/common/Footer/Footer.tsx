import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.logo}
        src='./icons/footer-logo.png'
        height={150}
        alt='Little Lemon Footer Logo'
      />
      <div className={styles.submenu}>
        <h2>Doormat Navigation</h2>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#menu'>Menu</a>
          </li>
          <li>
            <Link to={'/reservation'}>Reservation</Link>
          </li>
          <li>
            <a href='/order-online'>Order Online</a>
          </li>
          <li>
            <a href='/login'>Login</a>
          </li>
        </ul>
      </div>
      <div className={styles.submenu}>
        <h2>Contact</h2>
        <ul>
          <li>Address</li>
          <li>
            <a href='tel:773-555-5555'>773-555-5555</a>
          </li>
          <li>
            <a href='mailto:littlelemon@gmail.com' />
          </li>
        </ul>
      </div>
      <div className={styles.submenu}>
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <a href='https://www.instagram.com/'>Instagram</a>
          </li>
          <li>
            <a href='https://www.facebook.com/'>Facebook</a>
          </li>
          <li>
            <a href='https://www.tiktok.com/'>Tik Tok</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
