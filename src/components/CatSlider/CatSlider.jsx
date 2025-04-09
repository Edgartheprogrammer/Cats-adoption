// CatSlider.jsx
import React, { useState, useRef } from 'react';
import CatCard from '../CatCard/CatCard';
import SliderNavigation from '../SliderNavigation/SliderNavigation';
import styles from './CatSlider.module.css';

const CatSlider = ({ cats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardsToShow = 5;

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    sliderRef.current.scrollLeft += delta;
  };

  const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, cats.length - cardsToShow));
  const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <div className={styles.sliderContainer} data-testid="cat-slider">
      <div
        ref={sliderRef}
        className={styles.cardsWrapper}
        onWheel={handleScroll}
      >
        {cats.slice(currentIndex, currentIndex + cardsToShow).map((cat) => (
          <div key={cat.id} className={styles.cardItem} tabIndex={0}
            onKeyDown={handleKeyDown}
            data-testid="cat-card">
            <CatCard cat={cat} />
          </div>
        ))}
      </div>
      <SliderNavigation onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default CatSlider;