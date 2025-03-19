import React from 'react'
import styles from '../styles/Footer.module.css';


const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerAbout}>
            <h2>About</h2>
            <p>About us</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
        </div>
                
        <div className={styles.footerSocial}>
            <img src='./images/social-media.png' alt='social media'/>
        </div>
    </div>
  )
}

export default Footer
