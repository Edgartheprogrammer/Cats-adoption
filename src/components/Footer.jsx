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
          <a href='https://www.facebook.com/' target='_blank'>
            <img src='./public/images/facebook.jpg' alt='facebook' /></a>
          <a href='https://www.instagram.com/'>
            <img src='./public/images/instagram.png' alt='instagram' /></a>
          <a href='https://www.twitter.com/'></a>
          <a href='https://www.linkedln.com/'></a>
        </div>
    </div>
  )
}

export default Footer
