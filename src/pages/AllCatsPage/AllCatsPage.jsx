// src/pages/AllCatsPage.jsx
import { useState, useEffect } from 'react';
import { fetchRandomCats } from '../../services/catService.js';
import CatsSlider from '../../components/CatsSlider/CatsSlider.jsx';
import styles from './AllCatsPage.module.css';

const AllCatsPage = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCats = async () => {
      try {
        const catList = await fetchRandomCats(10);
        setCats(catList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCats();
  }, []);

  if (loading) return <div className={styles.loading}>Loading cats...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h1>Available Cats</h1>
      <CatsSlider cats={cats} />
    </div>
  );
};

export default AllCatsPage;