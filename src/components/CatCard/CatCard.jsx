// src/components/CatCard/CatCard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToFavorites, fetchFavorites, removeFromFavorites } from '../../services/catService';
import styles from './CatsCard.module.css';

const CatCard = ({ cat }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Проверяем, является ли кот избранным при загрузке компонента
  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const favorites = await fetchFavorites();
        const isInFavorites = favorites.some(favCat => favCat.id === cat.id);
        setIsFavorite(isInFavorites);
      } catch (error) {
        console.error('Ошибка при проверке статуса избранного:', error);
      }
    };
    
    checkIfFavorite();
  }, [cat.id]);
  
  // Функция для изменения статуса избранного
  const handleFavoriteToggle = async () => {
    try {
      if (isFavorite) {
        // Если уже в избранном, удаляем
        await removeFromFavorites(cat.id);
      } else {
        // Если не в избранном, добавляем
        await addToFavorites(cat);
      }
      // Переключаем состояние
      setIsFavorite(!isFavorite);
    } catch (error) {
      alert('Ошибка при изменении статуса избранного: ' + error.message);
    }
  };
  
  // Функция для перехода на страницу адоптации
  const handleAdopt = () => {
    // Сохраняем выбранного кота в localStorage (для сохранения при обновлении страницы)
    localStorage.setItem('adoptCat', JSON.stringify(cat));
    // Переходим на страницу адоптации с ID кота
    navigate(`/adopt/${cat.id}`);
  };
  
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
      <div className={styles.buttonsContainer}>
        <button 
          className={styles.adoptButton} 
          onClick={handleAdopt}
        >
          Adopt Meow
        </button>
        
        <button 
          className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ''}`} 
          onClick={handleFavoriteToggle}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default CatCard;