// CatsButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CatsButton.module.css';

const CatsButton = ({ imageSrc, buttonText, linkTo }) => {
  return (
    <div className={styles['image-button-container']}>
      <img src={imageSrc} alt="Cat" className={styles['kitten-image']} />
      <Link to={linkTo} className={styles['link-container']} data-testid="see-meows-button">
        <button className={styles['adopt-button']}>{buttonText}</button>
      </Link>
    </div>
  );
};

export default CatsButton;
