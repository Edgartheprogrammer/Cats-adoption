import React from 'react';
import styles from './CatsCard.module.css';

const CatCard = ({ cat, onAdopt, onFavorite }) => {
  return (
    <div className={styles.cardContainer}>
      {/* Контейнер с фотографией котика */}
      <div className={styles.imageContainer}>
        <img src={cat.url} alt="Cat" className={styles.catImage} />
      </div>
      
      {/* Контейнер с названием породы */}
      <div className={styles.breedContainer}>
        <h3 className={styles.breedName}>{cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Неизвестная порода'}</h3>
      </div>
      
      {/* Контейнер с кратким описанием */}
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          {cat.breeds && cat.breeds.length > 0 
            ? cat.breeds[0].description?.substring(0, 100) + '...' 
            : 'Очаровательный котик ищет любящий дом!'}
        </p>
      </div>
      
      {/* Контейнер с кнопками */}
      <div className="buttons-container">
        <button 
          className="adopt-button" 
          onClick={() => onAdopt(cat.id)}
        >
          Adopt Meow
        </button>
        <button 
          className="favorite-button" 
          onClick={() => onFavorite(cat.id)}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default CatCard;