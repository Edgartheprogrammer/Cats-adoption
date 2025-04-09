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
    navigate('/adopt', {
      state: {
        cat: {
          id: cat.id,
          url: cat.url,
          breeds: cat.breeds.map(breed => ({
            name: breed.name,
            description: breed.description
          }))
        }
      }
    });
  };

  const breed = cat.breeds?.[0] || {};
  const catName = breed.name || "Unknown Breed";
  const description = breed.description || "No description available";
  const shouldTruncate = description.length > 100;

  return (
    <div className={styles.cardContainer} data-testid="cat-card" data-theme={theme} tabIndex={0}>
      <div className={styles.imageContainer}>
        <img
          src={cat.url}
          alt={catName}
          className={styles.catImage}
          data-testid="cat-image"
          loading="lazy"
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.breedName} data-testid="breed-name">{catName}</h3>
        <div className={styles.descriptionContainer}>
          <p className={`${styles.description} ${shouldTruncate && !showFullDescription ? styles.truncated : ''}`} data-testid="cat-description">
            {description}
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className={styles.seeMore}
              data-testid="see-more"
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
            data-testid="adopt-button"
            aria-label={`Adopt ${catName}`}
          >
            Adopt Me
          </button>

          <button
            onClick={() => isFavorited(cat.id) ? removeFavorite(cat.id) : addFavorite(cat)}
            className={styles.favoriteButton}
            aria-label={isFavorited(cat.id) ? 'Remove from favorites' : 'Add to favorites'}
            data-testid="favorite-button"
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