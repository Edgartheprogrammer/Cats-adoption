// ContactForm.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useThemeStore from '../../stores/themeStore';
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const { theme } = useThemeStore();
  const { state } = useLocation();
  const navigate = useNavigate();
  const cat = state?.cat || null;

  const initialData = {
    name: "",
    email: "",
    phone: "",
    message: cat ? `I'm interested in adopting ${cat.breeds?.[0]?.name || "this cat"}!` : "",
    catId: cat?.id || "",
    catName: cat?.breeds?.[0]?.name || ""
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fieldRules = {
    name: value => /^[A-Za-z\s]{2,}$/.test(value) ? null : "Name needs 2+ letters",
    email: value => /\S+@\S+\.\S+/.test(value) ? null : "Invalid email",
    phone: value => /^\d{9}$/.test(value) ? null : "9-digit number required",
    message: value => value.length >= 20 ? null : "Message needs 20+ characters"
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = Object.entries(fieldRules).reduce((acc, [field, validate]) => {
      const error = validate(formData[field]);
      return error ? { ...acc, [field]: error } : acc;
    }, {});

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      setIsSubmitted(true);
      setTimeout(() => navigate('/allCats'), 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} data-theme={theme}>
      {cat && (
        <div className={styles.catHeader}>
          Applying to adopt: <span>{formData.catName}</span>
          <input type="hidden" name="catId" value={formData.catId} />
        </div>
      )}

      {['name', 'email', 'phone'].map(field => (
        <div key={field} className={styles.field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            aria-required="true"
          />
          {errors[field] && <div className={styles.error}>{errors[field]}</div>}
        </div>
      ))}

      <div className={styles.field}>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          aria-required="true"
        />
        {errors.message && <div className={styles.error}>{errors.message}</div>}
      </div>

      {isSubmitted ? (
        <div className={styles.success}>
          ✓ Submitted! We'll contact you soon. Redirecting...
        </div>
      ) : (
        <button type="submit" className={styles.submitBtn}>
          Submit Adoption Request
        </button>
      )}
    </form>
  );
};

export default ContactForm;