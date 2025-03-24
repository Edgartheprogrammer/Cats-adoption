// ContactPage.jsx
import React from "react";
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <main className={styles['contact-page-container']}>
      <h1>Contact Us</h1>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
