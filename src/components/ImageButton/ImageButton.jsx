import React from 'react';
import styles from './ImageButton.module.css';

const ImageButton = ({ imageSrc, buttonText }) => {
  return (
    <div className={styles['image-button-container']}>
      <img src={imageSrc} alt="Cat" className={styles['kitten-image']} />
      <button className={styles['adopt-button']}>{buttonText}</button>
    </div>
  );
};

export default ImageButton;