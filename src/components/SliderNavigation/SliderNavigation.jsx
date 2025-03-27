// src/components/SliderNavigation/SliderNavigation.jsx
import React from 'react';
import styles from './SliderNavigation.module.css';

const SliderNavigation = ({ onPrev, onNext }) => {
  return (
    <div className={styles.navigation}>
      <button 
        onClick={onPrev}
        className={styles.navButton}
        aria-label="Previous"
      >
        &lt;
      </button>
      <button 
        onClick={onNext}
        className={styles.navButton}
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
};

export default SliderNavigation;