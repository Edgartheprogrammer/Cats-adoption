// Footer.jsx
import React from 'react';
import useThemeStore from '../../store/themeStore';
import styles from './Footer.module.css';
import facebookIcon from '../../assets/icons/facebook-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';
import instagramIcon from '../../assets/icons/instagram-icon.png';
import twitterIcon from '../../assets/icons/twitter-icon.png';

const Footer = () => {
  const { theme } = useThemeStore();
  
  return (
    <footer className={styles.footerContainer} data-theme={theme}>
      <div className={styles.footerContent}>
        <div className={styles.footerSocial}>
          <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer">
            <img src={facebookIcon} alt='Facebook' className={styles.socialIcon} />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer">
            <img src={instagramIcon} alt='Instagram' className={styles.socialIcon} />
          </a>
          <a href='https://www.twitter.com/' target='_blank' rel="noopener noreferrer">
            <img src={twitterIcon} alt='Twitter' className={styles.socialIcon} />
          </a>
          <a href='https://www.linkedin.com/' target='_blank' rel="noopener noreferrer">
            <img src={linkedinIcon} alt='LinkedIn' className={styles.socialIcon} />
          </a>
        </div>
        
        <div className={styles.footerLinks}>
          <a href='#' className={styles.footerLink}>About Us</a>
          <a href='#' className={styles.footerLink}>FAQ</a>
          <a href='#' className={styles.footerLink}>Privacy Policy</a>
          <a href='#' className={styles.footerLink}>Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;