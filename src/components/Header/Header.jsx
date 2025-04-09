// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useThemeStore from '../../stores/themeStore.js';
import styles from './Header.module.css';
import pawDecoration from '../../assets/images/cats-paw.png';
import logo from '../../assets/icons/logo.png';
import allCatsIcon from '../../assets/icons/cat-icon.png';
import favoriteIcon from '../../assets/icons/star-icon.png';
import switchIcon from '../../assets/icons/switch-icon.png';

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className={styles.header} data-theme={theme}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Adopt Meow Logo" className={styles.logo} />
        </Link>

        <div className={styles.pawDecoration}>
          <img src={pawDecoration} alt="Cat paws decoration" className={styles.pawImage} />
        </div>

        <div className={styles.navIcons}>
          <Link to="/allCats">
            <img
              src={allCatsIcon}
              alt="All cats"
              className={styles.navIcon}
              title="Browse all cats"
            />
          </Link>

          <Link to="/favorites">
            <img
              src={favoriteIcon}
              alt="Favorites"
              className={styles.navIcon}
              title="Your favorite cats"
            />
          </Link>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            data-testid="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <img
              src={switchIcon}
              alt="Theme switcher"
              className={styles.navIcon}
            />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;