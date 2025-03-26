// CatsSlider.
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
    <div className={styles.sliderWrapper}>
      <div ref={sliderRef} className={styles.slider}>
        {cats.map(cat => (
          <div key={cat.id} className={styles.slide}>
            <CatCard cat={cat} />
          </div>
        ))}
      </div>
      
      <div className={styles.navigation}>
        <button 
          onClick={() => scroll('left')} 
          className={styles.navButton}
          aria-label="Scroll left"
        >
          &lt;
        </button>
        <button 
          onClick={() => scroll('right')} 
          className={styles.navButton}
          aria-label="Scroll right"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CatsSlider;