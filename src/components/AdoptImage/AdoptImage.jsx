// AdoptImage.jsx
import React from 'react';
import styles from './AdoptImage.module.css';

const AdoptImage = ({ imageSrc, line1, line2 }) => {
  return (
    <div className={styles['image-container']}>
      <img src={imageSrc} alt="Cat" className={styles['cat-image']} />
      <div className={styles['adopt-text']}>
        <div>{line1}</div>
        <div>{line2}</div>
      </div>
    </div>
  );
};

export default AdoptImage;