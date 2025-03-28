// AllCatsPage.jsx
import { useEffect, useState } from 'react';
import { fetchCats } from '../../services/catService';
import CatSlider from '../../components/CatSlider/CatSlider';
import styles from './AllCatsPage.module.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';

const AllCatsPage = () => {
  const [state, setState] = useState({ cats: [], loading: true, error: null });

  useEffect(() => {
    const loadCats = async () => {
      try {
        const catList = await fetchCats(10);
        setState({ cats: catList, loading: false, error: null });
      } catch (error) {
        setState({ cats: [], loading: false, error: error.message });
      }
    };

    loadCats();
  }, []);

  return (
    <main className={styles.container}>
      <h1>Available Cats</h1>
      <Breadcrumbs />
      {state.loading ? (
        <div className={styles.loading}>Loading cats...</div>
      ) : state.error ? (
        <div className={styles.error}>
          <p>{state.error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : state.cats.length > 0 ? (
        <CatSlider cats={state.cats} />
      ) : (
        <div className={styles.empty}>No cats available</div>
      )}
    </main>
  );
};

export default AllCatsPage;