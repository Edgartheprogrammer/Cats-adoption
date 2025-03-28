// Breadcrumb.jsx
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';
import useThemeStore from '../../stores/themeStore';

const Breadcrumbs = () => {
  const { theme } = useThemeStore();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  const getDisplayName = (path) => {
    const mappings = {
      'allCats': 'All Cats',
      'adopt': 'Adoption Request',
      'favorites': 'My Favorites'
    };
    return mappings[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav className={styles.breadcrumbContainer} aria-label="Breadcrumb navigation" data-theme={theme}>
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link to="/" className={styles.breadcrumbLink}>Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className={styles.breadcrumbItem}>
              <span className={styles.separator}>›</span>
              {isLast ? (
                <span className={styles.currentPage}>{getDisplayName(name)}</span>
              ) : (
                <Link to={routeTo} className={styles.breadcrumbLink}>
                  {getDisplayName(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;