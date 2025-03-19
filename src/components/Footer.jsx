import React from 'react'
import styles from '../styles/Footer.module.css';


const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerAbout}>
          
            <a href='#'>About us</a>
            <a href='#'>FAQ</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Cookie preferences</a>
            
        </div>
                
        <div className={styles.footerSocial}>
            <img src='./images/social-media.png' alt='social media'/>
        </div>
    </div>
  )
}

export default Footer
