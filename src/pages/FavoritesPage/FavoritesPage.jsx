// src/pages/FavoritesPage.jsx
import useFavoritesStore from '../../stores/favoritesStore.js';
import CatCard from '../../components/CatCard/CatCard.jsx';
import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const { favorites } = useFavoritesStore();

  return (
    <div className={styles.favoritesPage}>
      <h1>Your Favorite Cats</h1>
      
      {favorites.length > 0 ? (
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {favorites.map(cat => (
              <div key={cat.id} className={styles.slide}>
                <CatCard cat={cat} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className={styles.noFavorites}>You haven't favorited any cats yet!</p>
      )}
    </div>
  );
};

export default FavoritesPage;