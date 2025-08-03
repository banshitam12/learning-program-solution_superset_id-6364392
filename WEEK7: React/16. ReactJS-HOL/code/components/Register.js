import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Real-time validation
    validateField(name, value);
  };

  // Validate individual fields
  const validateField = (fieldName, value) => {
    let error = '';

    switch (fieldName) {
      case 'name':
        if (value.length < 5) {
          error = 'Name should have at least 5 characters';
        }
        break;
      case 'email':
        if (!value.includes('@') || !value.includes('.')) {
          error = 'Email should contain @ and .';
        }
        break;
      case 'password':
        if (value.length < 8) {
          error = 'Password should have at least 8 characters';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [fieldName]: error
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameError = formData.name.length < 5 ? 'Name should have at least 5 characters' : '';
    const emailError = (!formData.email.includes('@') || !formData.email.includes('.')) ? 'Email should contain @ and .' : '';
    const passwordError = formData.password.length < 8 ? 'Password should have at least 8 characters' : '';

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError
    });

    // If no errors, submit the form
    if (!nameError && !emailError && !passwordError) {
      setIsSubmitted(true);
      console.log('Form submitted successfully:', formData);
      alert('Registration successful!');
    }
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error-input' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>

        {isSubmitted && (
          <div className="success-message">
            Registration completed successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;