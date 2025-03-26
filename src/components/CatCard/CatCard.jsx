// CatCard.jsx
import useFavoritesStore from '../../stores/favoritesStore.js';
import styles from './CatCard.module.css';

const CatCard = ({ cat }) => {
  const { addFavorite, removeFavorite, isFavorited } = useFavoritesStore();
  const breed = cat.breeds?.[0] || {};
  const catName = breed.name || "Unknown Breed";
  const description = breed.description || "No description available";
  const temperament = breed.temperament || "Temperament not specified";

  return (
    <div className={styles.card}>
      <img 
        src={cat.url} 
        alt={catName}
        className={styles.image}
      />
      
      <div className={styles.info}>
        <h3 className={styles.name}>{catName}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.temperament}>
          <strong>Temperament:</strong> {temperament}
        </p>
        
        <div className={styles.actions}>
          <button className={styles.adoptButton}>
            Adopt Me
          </button>
          
          <button
            onClick={() => isFavorited(cat.id) ? removeFavorite(cat.id) : addFavorite(cat)}
            className={`${styles.favoriteButton} ${isFavorited(cat.id) ? styles.favorited : ''}`}
          >
            {isFavorited(cat.id) ? '❤️' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatCard;