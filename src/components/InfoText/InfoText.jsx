import React from 'react';
import useThemeStore from '../../stores/themeStore.js';
import styles from './InfoText.module.css';

const InfoText = () => {
  const { theme } = useThemeStore();

  return (
    <div className={styles.infoText} data-theme={theme}>
        <h1>Give a loving home to a furry friend!</h1>
        <p>Browse through a delightful collection of adorable cats, with unique personality and story. From playful kittens to serene seniors, every cat has so much love to give and is ready to become a cherished member of your home.</p>
        <h2>✨ Why Adopt?✨</h2>
        <p>
        Save a life ✔️
        <br />
        Find a loyal companion ✔️
        <br />
        Bring joy to your home & your heart ✔️
        </p>
        <h3>Ready to Adopt? ❤️ Click below to meet your future cat!</h3>      
    </div>
  );
};

export default InfoText;