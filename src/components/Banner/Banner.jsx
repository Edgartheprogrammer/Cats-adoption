// Banner.jsx
import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ imageSrc, line1, line2 }) => {
  return (
    <div className={styles['image-container']} data-testid="home-banner">
      <img src={imageSrc} alt="Cat" className={styles['cat-image']} />
      <div className={styles['adopt-text']}>
        <div>{line1}</div>
        <div>{line2}</div>
      </div>
    </div>
  );
};

export default Banner;