// AdoptPage.jsx
import React from "react";
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import styles from './AdoptPage.module.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';

const AdoptPage = () => {
  return (
    <main className={styles['adopt-page-container']}>
      <h1>Contact Us</h1>
      <Breadcrumbs />
      <ContactForm />
    </main>
  );
};

export default AdoptPage;
