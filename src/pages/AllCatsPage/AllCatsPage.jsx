/// src/pages/AllCatsPage.jsx
import React from 'react';
import CatsSlider from '../components/CatsSlider/CatsSlider';
import styles from './AllCatsPage.module.css';

const AllCatsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Наши котики</h1>
      <CatsSlider />
    </div>
  );
};

export default AllCatsPage;