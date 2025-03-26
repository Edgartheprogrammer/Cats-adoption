// CatsSlider.jsx
import { useRef } from 'react';
import styles from './CatsSlider.module.css';
import CatCard from '../CatCard/CatCard';

const CatsSlider = ({ cats }) => {
  const sliderRef = useRef();

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <button 
        onClick={() => scroll('left')} 
        className={styles.arrowButton}
        aria-label="Scroll left"
      >
        &lt;
      </button>
      
      <div ref={sliderRef} className={styles.slider}>
        {cats.map(cat => (
          <div key={cat.id} className={styles.slide}>
            <CatCard cat={cat} />
          </div>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')} 
        className={styles.arrowButton}
        aria-label="Scroll right"
      >
        &gt;
      </button>
    </div>
  );
};

export default CatsSlider;