// AdoptPage.jsx
import React from "react";
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import styles from '../AdoptPage.module.css';

const AdoptPage = () => {
  return (
    <main className={styles['adopt-page-container']}>
      <h1>Contact Us</h1>
      <ContactForm />
    </main>
  );
};

export default AdoptPage;
