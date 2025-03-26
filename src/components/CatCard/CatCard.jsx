import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFavoritesStore from '../../stores/favoritesStore.js';
import styles from './CatCard.module.css';

const CatCard = ({ cat }) => {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorited } = useFavoritesStore();
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const breed = cat.breeds?.[0] || {};
  const catName = breed.name || "Unknown Breed";
  const description = breed.description || "No description available";

  const shouldTruncate = description.length > 100;

  const handleAdoptClick = () => {
    navigate('/adopt', { state: { cat } });
  };

  return (
    <div className={styles.card}>
      <img 
        src={cat.url} 
        alt={catName}
        className={styles.image}
        loading="lazy"
      />
      
      <div className={styles.info}>
        <h3 className={styles.name}>{catName}</h3>
        
        <div className={styles.descriptionContainer}>
          <p className={`${styles.description} ${shouldTruncate && !showFullDescription ? styles.truncated : ''}`}>
            {description}
          </p>
          {shouldTruncate && (
            <button 
              onClick={() => setShowFullDescription(!showFullDescription)}
              className={styles.seeMore}
              aria-label={showFullDescription ? 'Show less description' : 'Show more description'}
            >
              {showFullDescription ? 'See Less' : 'See More'}
            </button>
          )}
        </div>

        <div className={styles.actions}>
          <button
            onClick={handleAdoptClick}
            className={styles.adoptButton}
            aria-label={`Adopt ${catName}`}
          >
            Adopt Me
          </button>
          
          <button
            onClick={() => isFavorited(cat.id) ? removeFavorite(cat.id) : addFavorite(cat)}
            className={`${styles.favoriteButton} ${isFavorited(cat.id) ? styles.favorited : ''}`}
            aria-label={isFavorited(cat.id) ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorited(cat.id) ? '❤️' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatCard;