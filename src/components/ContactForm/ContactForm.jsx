// ContactForm.jsx
import React, { useState } from 'react';
import styles from "./ContactForm.module.css";
import useThemeStore from '../../stores/themeStore.js';

const ContactForm = () => {
  const { theme } = useThemeStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (name, value) => {
    if (!value) return "This field is mandatory";

    switch (name) {
      case "name":
        if (!/^[A-Za-z\s]{2,}$/.test(value))
          return "Name must contain at least 2 letters";
        break;
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value))
          return "Enter a valid email address";
        break;
      case "phone":
        if (!/^\d{9}$/.test(value))
          return "Phone must be a 10-digit number";
        break;
      case "message":
        if (value.length < 20)
          return "Message must be at least 20 characters long";
        break;
      default:
        break;
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles["contact-form"]} data-theme={theme}>
      <div className={styles["form-content"]}>
        <div className={styles["form-group"]}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles["form-group"]}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles["form-group"]}>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            inputMode="numeric"
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>

        <div className={styles["form-group"]}>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="4"
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <div className={styles.successContainer}>
          {isSubmitted &&
            <div className={styles.success}>Form submitted successfully!</div>
          }
        </div>
      </div>

      <button type="submit" className={styles["submit-button"]}>
        Submit Meow
      </button>
    </form>
  );
};

export default ContactForm;