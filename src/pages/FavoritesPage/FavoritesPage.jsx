// src/pages/FavoritesPage.jsx
import { useState } from 'react';
import useFavoritesStore from '../../stores/favoritesStore';
import CatSlider from '../../components/CatSlider/CatSlider';
import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const { favorites } = useFavoritesStore();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useState(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.favoritesPage}>
      <h1>Your Favorite Cats</h1>
      
      {isInitialLoad ? (
        <div className={styles.loading}>Loading favorites...</div>
      ) : favorites.length > 0 ? (
        <CatSlider cats={favorites} />
      ) : (
        <div className={styles.emptyState}>
          <p>You haven't favorited any cats yet!</p>
          <button 
            className={styles.browseButton}
            onClick={() => window.location.href = '/all-cats'}
          >
            Browse Cats
          </button>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;