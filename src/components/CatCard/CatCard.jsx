// CatCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFavoritesStore from '../../stores/favoritesStore';
import styles from './CatCard.module.css';
import whiteStar from '../../assets/icons/white-star.png';
import goldStar from '../../assets/icons/gold-star.png';
import useThemeStore from '../../stores/themeStore';

const CatCard = ({ cat }) => {
  const navigate = useNavigate();
  const { theme } = useThemeStore();
  const { addFavorite, removeFavorite, isFavorited } = useFavoritesStore();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleAdoptClick = () => {
    navigate('/adopt', { state: { cat } });
  };

  const breed = cat.breeds?.[0] || {};
  const catName = breed.name || "Unknown Breed";
  const description = breed.description || "No description available";
  const shouldTruncate = description.length > 100;

  return (
    <div className={styles.cardContainer} data-theme={theme}>
      <div className={styles.imageContainer}>
        <img
          src={cat.url}
          alt={catName}
          className={styles.catImage}
          loading="lazy"
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.breedName}>{catName}</h3>

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
              {showFullDescription ? 'see less' : 'see more'}
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
            className={styles.favoriteButton}
            aria-label={isFavorited(cat.id) ? 'Remove from favorites' : 'Add to favorites'}
          >
            <img
              src={isFavorited(cat.id) ? goldStar : whiteStar}
              alt={isFavorited(cat.id) ? 'Favorited' : 'Not favorited'}
              className={styles.starIcon}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatCard;