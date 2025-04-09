// AllCatsPage.jsx
import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { fetchCats } from '../../services/catService';
import CatSlider from '../../components/CatSlider/CatSlider';
import styles from './AllCatsPage.module.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';

const ErrorFallback = ({ error }) => (
  <div className={styles.errorBoundary} data-testid="error-boundary">
    <h3>Application Error</h3>
    <pre>{error.message}</pre>
    <button onClick={() => window.location.reload()}>Refresh Page</button>
  </div>
);

const AllCatsPage = () => {
  const [state, setState] = useState({
    cats: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const loadCats = async () => {
      try {
        const catList = await fetchCats(10);
        setState({ cats: catList, loading: false, error: null });
      } catch (error) {
        const message = error.message === 'Failed to fetch'
          ? 'Failed to fetch cats'
          : error.message;
        setState({
          cats: [],
          loading: false,
          error: message
        });
      }
    };
    loadCats();
  }, []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <main className={styles.container}>
        <h1>Available Cats</h1>
        <Breadcrumbs />

        {state.loading ? (
          <div className={styles.loading} data-testid="loading-indicator">
            Loading cats...
          </div>
        ) : state.error ? (
          <div className={styles.error} data-testid="error-state">
            <p>{state.error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        ) : state.cats.length > 0 ? (
          <CatSlider cats={state.cats} />
        ) : (
          <div className={styles.empty} data-testid="empty-state">
            No cats available
          </div>
        )}
      </main>
    </ErrorBoundary>
  );
};

export default AllCatsPage;