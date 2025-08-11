/**
 * Utility functions for form validation
 */

/**
 * Validate email address
 * @param {String} email - Email address to validate
 * @returns {Boolean} True if email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

/**
 * Validate phone number
 * @param {String} phone - Phone number to validate
 * @returns {Boolean} True if phone number is valid
 */
export const isValidPhone = (phone) => {
  // Basic phone validation - allows international formats
  const phoneRegex = /^[0-9+\s()-]{8,15}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate required field
 * @param {String} value - Field value to validate
 * @returns {Boolean} True if field is not empty
 */
export const isRequired = (value) => {
  return value && value.trim() !== '';
};

/**
 * Validate minimum length
 * @param {String} value - Field value to validate
 * @param {Number} minLength - Minimum length required
 * @returns {Boolean} True if field meets minimum length
 */
export const hasMinLength = (value, minLength) => {
  return value && value.trim().length >= minLength;
};

/**
 * Validate maximum length
 * @param {String} value - Field value to validate
 * @param {Number} maxLength - Maximum length allowed
 * @returns {Boolean} True if field does not exceed maximum length
 */
export const hasMaxLength = (value, maxLength) => {
  return value && value.trim().length <= maxLength;
};

/**
 * Validate password strength
 * @param {String} password - Password to validate
 * @returns {Object} Object with isValid boolean and strength score (0-4)
 */
export const validatePasswordStrength = (password) => {
  let strength = 0;
  const results = { isValid: false, strength: 0, feedback: [] };

  if (!password) {
    results.feedback.push('Le mot de passe est requis');
    return results;
  }

  // Length check
  if (password.length < 8) {
    results.feedback.push('Le mot de passe doit contenir au moins 8 caractères');
  } else {
    strength += 1;
  }

  // Contains lowercase letter
  if (/[a-z]/.test(password)) {
    strength += 1;
  } else {
    results.feedback.push('Ajoutez au moins une lettre minuscule');
  }

  // Contains uppercase letter
  if (/[A-Z]/.test(password)) {
    strength += 1;
  } else {
    results.feedback.push('Ajoutez au moins une lettre majuscule');
  }

  // Contains number
  if (/[0-9]/.test(password)) {
    strength += 1;
  } else {
    results.feedback.push('Ajoutez au moins un chiffre');
  }

  // Contains special character
  if (/[^A-Za-z0-9]/.test(password)) {
    strength += 1;
  } else {
    results.feedback.push('Ajoutez au moins un caractère spécial');
  }

  results.strength = strength;
  results.isValid = strength >= 3;

  return results;
};

/**
 * Validate contact form
 * @param {Object} values - Form values
 * @returns {Object} Object with validation errors
 */
export const validateContactForm = (values) => {
  const errors = {};

  if (!isRequired(values.fullName)) {
    errors.fullName = 'Le nom complet est requis';
  }

  if (!isRequired(values.email)) {
    errors.email = 'L\'email est requis';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Adresse email invalide';
  }

  if (!isRequired(values.phone)) {
    errors.phone = 'Le numéro de téléphone est requis';
  } else if (!isValidPhone(values.phone)) {
    errors.phone = 'Numéro de téléphone invalide';
  }

  if (!isRequired(values.message)) {
    errors.message = 'Le message est requis';
  } else if (!hasMinLength(values.message, 10)) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  }

  return errors;
};

/**
 * Validate newsletter subscription form
 * @param {Object} values - Form values
 * @returns {Object} Object with validation errors
 */
export const validateNewsletterForm = (values) => {
  const errors = {};

  if (!isRequired(values.email)) {
    errors.email = 'L\'email est requis';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Adresse email invalide';
  }

  return errors;
};
