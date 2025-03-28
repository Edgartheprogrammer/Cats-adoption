// src/components/Breadcrumbs.jsx
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.module.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  // Custom name mapping for specific routes
  const getDisplayName = (path) => {
    const mappings = {
      'cats': 'Available Cats',
      'favorites': 'My Favorites',
      'application': 'Adoption Application',
      'success': 'Application Submitted'
    };
    return mappings[path] || path.replace(/-/g, ' ');
  };

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}> › {getDisplayName(name)}</span>
        ) : (
          <Link key={name} to={routeTo}> › {getDisplayName(name)}</Link>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;