import { useState } from 'react';

/**
 * Custom hook for form validation
 * @param {Object} initialValues - Initial form values
 * @param {Function} validate - Validation function that returns errors object
 * @returns {Object} Form state, errors, handlers, and submission state
 */
const useFormValidation = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle different input types
    const inputValue = type === 'checkbox' ? checked : value;
    
    setValues({
      ...values,
      [name]: inputValue,
    });
    
    // Clear error when user starts typing if the field was previously touched
    if (touched[name] && errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  // Handle input blur
  const handleBlur = (e) => {
    const { name } = e.target;
    
    setTouched({
      ...touched,
      [name]: true,
    });
    
    // Validate single field on blur
    const fieldErrors = validate({ [name]: values[name] });
    if (fieldErrors[name]) {
      setErrors({
        ...errors,
        [name]: fieldErrors[name],
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e, onSubmit) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    
    setTouched(allTouched);
    
    // Validate all fields
    const formErrors = validate(values);
    setErrors(formErrors);
    
    // If no errors, proceed with submission
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        await onSubmit(values);
        setIsSubmitted(true);
        // Reset form after successful submission if needed
        // setValues(initialValues);
      } catch (error) {
        console.error('Form submission error:', error);
        setErrors({
          ...formErrors,
          form: 'Une erreur est survenue lors de la soumission du formulaire.',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Reset form to initial state
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};

export default useFormValidation;
