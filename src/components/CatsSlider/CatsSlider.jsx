// src/components/CatsSlider/CatsSlider.jsx
import React, { useState, useEffect } from 'react';
import CatCard from '../CatCard/CatCard';
import { fetchCats } from '../../services/catService';
import styles from './CatsSlider.module.css';

const CatsSlider = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const loadCats = async () => {
      try {
        setLoading(true);
        const data = await fetchCats();
        setCats(data);
      } catch (err) {
        setError('Не удалось загрузить данные о котиках. Пожалуйста, попробуйте позже.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadCats();
  }, []);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cats.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cats.length) % cats.length);
  };
  
  if (loading) {
    return <div className={styles.loading}>Загрузка котиков...</div>;
  }
  
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
  
  if (cats.length === 0) {
    return <div className={styles.empty}>Котики не найдены</div>;
  }
  
  return (
    <div className={styles.sliderContainer}>
      <div className={`${styles.navButton} ${styles.navButtonLeft}`} onClick={handlePrev}>
        &lt;
      </div>
      
      <div className={styles.cardWrapper}>
        <CatCard cat={cats[currentIndex]} />
      </div>
      
      <div className={`${styles.navButton} ${styles.navButtonRight}`} onClick={handleNext}>
        &gt;
      </div>
    </div>
  );
};

export default CatsSlider;