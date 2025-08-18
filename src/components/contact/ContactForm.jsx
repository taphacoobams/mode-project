import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck } from 'react-icons/fi';

// Liste des thèmes pour le sujet
const subjectThemes = [
  { value: '', label: 'Sélectionnez un sujet' },
  { value: 'information', label: 'Demande d\'information' },
  { value: 'commande', label: 'Question sur une commande' },
  { value: 'personnalisation', label: 'Demande de personnalisation' },
  { value: 'collaboration', label: 'Proposition de collaboration' },
  { value: 'reclamation', label: 'Réclamation' },
  { value: 'autre', label: 'Autre sujet' }
];

const ContactForm = ({ onSubmit, formSubmitted }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom complet est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Adresse email invalide';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis';
    } else if (!/^[0-9+\s()-]{8,15}$/i.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Veuillez sélectionner un sujet';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {formSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-sm flex items-center mb-6"
        >
          <FiCheck size={24} className="mr-3 text-green-500" />
          <div>
            <h3 className="font-medium">Message envoyé avec succès!</h3>
            <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </motion.div>
      ) : null}
      
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 mb-2">
          Nom complet <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full border ${
            errors.fullName ? 'border-red-500' : 'border-gray-300'
          } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
          aria-invalid={errors.fullName ? 'true' : 'false'}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-red-500 text-sm">
            {errors.fullName}
          </p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-red-500 text-sm">
            {errors.email}
          </p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 mb-2">
          Téléphone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full border ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-red-500 text-sm">
            {errors.phone}
          </p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 mb-2">
          Sujet <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full border ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        >
          {subjectThemes.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-red-500 text-sm">
            {errors.subject}
          </p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
          <p id="message-error" className="mt-1 text-red-500 text-sm">
            {errors.message}
          </p>
        )}
      </div>
      
      <button
        type="submit"
        className="bg-kc-gold hover:bg-kc-gold/90 text-white w-full flex items-center justify-center px-6 py-3 rounded-md transition-colors"
        disabled={formSubmitted}
      >
        <FiSend className="mr-2" />
        Envoyer le message
      </button>
    </form>
  );
};

export default ContactForm;
