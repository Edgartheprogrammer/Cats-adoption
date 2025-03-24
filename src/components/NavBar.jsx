import React from 'react';
import { Link } from 'react-router-dom'; //!!!-1
import styles from '../styles/NavBar.module.css';//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import catsPaw from '../assets/images/cats-paw.png';//!!!!-2
import logo from '../assets/images/logo.png';//- 3
import adoptIcon from '../assets/images/adopt-icon.png'; // !!!- 4


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
        <img src= {logo} alt="Logo" className={styles.logo} />
</Link>

        <div className={styles.centerPaws}>
        <img src={catsPaw} alt="Сat paws" className={styles.paw} />
</div>

        <Link to="/adopt" className={styles.heartButton}>
        <img src= {adoptIcon} alt="adoptIcon" className={styles.adoptIcon} />
        </Link>
        </div>
    </nav>
  );
};




export default NavBar;