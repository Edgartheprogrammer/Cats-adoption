// AllCatsPage.jsx
import React from 'react'
import kittenIcon from '../../assets/icons/kitten-icon.png';
import CatsButton from '../../components/CatsButton/CatsButton.jsx';
import styles from './AllCatsPage.module.css';

const AllCatsPage = () => {
  return (
    <main className={styles['allCatsPageContainer']}>
      <p>AllCatsPage</p>
      <CatsButton imageSrc={kittenIcon} buttonText="See All Meows" linkTo="/adopt" />
    </main>
  )
}

export default AllCatsPage