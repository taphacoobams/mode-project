import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import axios from 'axios';

// Style CSS intégré directement dans le composant
const mensurationsStyles = `
  /* Hide number input arrows */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  /* Form styling to match contact form */
  .kc-input {
    width: 100%;
    border: 1px solid #d1d5db; /* border-gray-300 */
    border-radius: 0.125rem; /* rounded-sm */
    padding: 0.5rem 1rem; /* px-4 py-2 */
    transition: all 0.2s;
  }

  .kc-input:focus {
    outline: none;
    border-color: #d4af37; /* kc-gold */
    box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.2);
  }

  .kc-input.error {
    border-color: #ef4444; /* border-red-500 */
  }

  .kc-label {
    color: #374151; /* text-gray-700 */
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .kc-button {
    background-color: #d4af37; /* bg-kc-gold */
    color: white;
    border: none;
    border-radius: 0.375rem; /* rounded-md */
    font-weight: 500;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kc-button:hover {
    background-color: rgba(212, 175, 55, 0.9); /* bg-kc-gold/90 */
  }

  .kc-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .error-message {
    color: #ef4444; /* text-red-500 */
    font-size: 0.875rem; /* text-sm */
    margin-top: 0.25rem;
  }
`;

const Mensurations = () => {
  const [activeTab, setActiveTab] = useState('homme');
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom_complet?.trim()) {
      newErrors.nom_complet = 'Le nom complet est requis';
    }
    
    if (!formData.telephone?.trim()) {
      newErrors.telephone = 'Le numéro de téléphone est requis';
    } else if (!/^[0-9+\s()-]{8,15}$/i.test(formData.telephone)) {
      newErrors.telephone = 'Numéro de téléphone invalide';
    }
    
    // Validation des champs de mensurations en fonction de l'onglet actif
    const requiredFields = ['cou', 'epaule', 'manche_courte', 'manche_longue', 'poitrine', 
                          'tour_bras', 'longueur_chemise', 'tour_ventre', 'ceinture', 
                          'tour_hanche', 'tour_cuisse', 'longueur_pantalon'];
                          
    // Ajouter les champs spécifiques à chaque genre
    if (activeTab === 'homme') {
      requiredFields.push('longueur_tunique', 'longueur_kaftan');
    } else {
      requiredFields.push('longueur_tailleur', 'longueur_robe', 'longueur_jupe', 'tour_taille');
    }
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Ce champ est requis';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      setError('');
      setSuccess('');

      try {
        const dataToSend = {
          ...formData,
          gender: activeTab
        };

        const apiUrl = process.env.REACT_APP_API_URL || 'https://khalil-collection-api.onrender.com';
        const response = await axios.post(`${apiUrl}/api/send-mensuration`, dataToSend);

        if (response.data.success) {
          setSuccess('Vos mensurations ont été envoyées avec succès!');
          setFormData({});
          setErrors({});
          e.target.reset();
        } else {
          throw new Error(response.data.message || "Erreur lors de l'envoi");
        }
      } catch (err) {
        console.error("Erreur lors de l'envoi des mensurations:", err);
        setError(
          err.response?.data?.message ||
            "Une erreur est survenue lors de l'envoi de vos mensurations. Veuillez réessayer."
        );
      } finally {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <style>{mensurationsStyles}</style>
      <Helmet>
        <title>Vos mensurations | Khalil Collection - La mode africaine à un autre niveau</title>
        <meta
          name="description"
          content="Prenez vos mensurations en ligne pour des vêtements Khalil Collection parfaitement ajustés à votre morphologie. Service gratuit pour tous nos clients."
        />
        <meta
          property="og:title"
          content="Vos mensurations | Khalil Collection - La mode africaine à un autre niveau"
        />
        <meta
          property="og:description"
          content="Prenez vos mensurations en ligne pour des vêtements Khalil Collection parfaitement ajustés à votre morphologie. Service gratuit pour tous nos clients."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://btoure.com/mensurations" />
      </Helmet>

      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* Fil d'Ariane */}
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-kc-gold">Home</a>
            <span className="mx-2">/</span>
            <span className="text-kc-gold">Vos mensurations</span>
          </div>

          {/* Titre de la page */}
          <h1 className="text-3xl font-bold text-center mb-8">Vos mensurations</h1>

          {/* Image de bannière */}
          <div className="mb-10">
            <img
              src="/images/mensuration-banner.jpg"
              alt="Prise de mensurations"
              className="w-full h-64 object-cover rounded-md"
            />
          </div>

          {/* Messages d'état */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md text-center mb-8"
            >
              <h3 className="text-xl font-bold mb-2">Merci pour vos informations !</h3>
              <p>Nous avons bien reçu vos mensurations. Notre équipe les utilisera pour confectionner vos vêtements sur mesure.</p>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-md text-center mb-8"
            >
              <h3 className="text-xl font-bold mb-2">Erreur</h3>
              <p>{error}</p>
            </motion.div>
          )}

          {/* Tabs */}
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('homme')}
              className={`py-3 px-8 font-medium text-base uppercase tracking-wider ${
                activeTab === 'homme'
                  ? 'text-kc-gold border-b-2 border-kc-gold bg-gray-50'
                  : 'text-gray-600 hover:text-kc-gold'
              }`}
            >
              Mesures Hommes
            </button>
            <button
              onClick={() => setActiveTab('femme')}
              className={`py-3 px-8 font-medium text-base uppercase tracking-wider ${
                activeTab === 'femme'
                  ? 'text-kc-gold border-b-2 border-kc-gold bg-gray-50'
                  : 'text-gray-600 hover:text-kc-gold'
              }`}
            >
              Mesures Femmes
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            {/* Informations personnelles */}
            <div className="mb-8">
              <div className="mb-4">
                <label htmlFor="nom_complet" className="block text-gray-700 mb-2">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom_complet"
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.nom_complet ? 'border-red-500' : 'border-gray-300'
                  } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                  aria-invalid={errors.nom_complet ? 'true' : 'false'}
                  aria-describedby={errors.nom_complet ? 'nom_complet-error' : undefined}
                />
                {errors.nom_complet && (
                  <p id="nom_complet-error" className="mt-1 text-red-500 text-sm">
                    {errors.nom_complet}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="telephone" className="block text-gray-700 mb-2">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.telephone ? 'border-red-500' : 'border-gray-300'
                  } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                  aria-invalid={errors.telephone ? 'true' : 'false'}
                  aria-describedby={errors.telephone ? 'telephone-error' : undefined}
                />
                {errors.telephone && (
                  <p id="telephone-error" className="mt-1 text-red-500 text-sm">
                    {errors.telephone}
                  </p>
                )}
              </div>
            </div>

            {/* Mensurations */}
            {activeTab === 'homme' ? (
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="mb-4">
                  <label htmlFor="cou" className="block text-gray-700 mb-2">
                    Cou <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="cou" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.cou ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.cou ? 'true' : 'false'}
                    aria-describedby={errors.cou ? 'cou-error' : undefined}
                  />
                  {errors.cou && (
                    <p id="cou-error" className="mt-1 text-red-500 text-sm">
                      {errors.cou}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="epaule" className="block text-gray-700 mb-2">
                    Épaule <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="epaule" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.epaule ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.epaule ? 'true' : 'false'}
                    aria-describedby={errors.epaule ? 'epaule-error' : undefined}
                  />
                  {errors.epaule && (
                    <p id="epaule-error" className="mt-1 text-red-500 text-sm">
                      {errors.epaule}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="manche_courte" className="block text-gray-700 mb-2">
                    Manche courte <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="manche_courte" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.manche_courte ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.manche_courte ? 'true' : 'false'}
                    aria-describedby={errors.manche_courte ? 'manche_courte-error' : undefined}
                  />
                  {errors.manche_courte && (
                    <p id="manche_courte-error" className="mt-1 text-red-500 text-sm">
                      {errors.manche_courte}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="manche_longue" className="block text-gray-700 mb-2">
                    Manche longue <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="manche_longue" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.manche_longue ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.manche_longue ? 'true' : 'false'}
                    aria-describedby={errors.manche_longue ? 'manche_longue-error' : undefined}
                  />
                  {errors.manche_longue && (
                    <p id="manche_longue-error" className="mt-1 text-red-500 text-sm">
                      {errors.manche_longue}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="poitrine" className="block text-gray-700 mb-2">
                    Poitrine <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="poitrine" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.poitrine ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.poitrine ? 'true' : 'false'}
                    aria-describedby={errors.poitrine ? 'poitrine-error' : undefined}
                  />
                  {errors.poitrine && (
                    <p id="poitrine-error" className="mt-1 text-red-500 text-sm">
                      {errors.poitrine}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="tour_bras" className="block text-gray-700 mb-2">
                    Tour de bras <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="tour_bras" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.tour_bras ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.tour_bras ? 'true' : 'false'}
                    aria-describedby={errors.tour_bras ? 'tour_bras-error' : undefined}
                  />
                  {errors.tour_bras && (
                    <p id="tour_bras-error" className="mt-1 text-red-500 text-sm">
                      {errors.tour_bras}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="longueur_chemise" className="block text-gray-700 mb-2">
                    Longueur chemise <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="longueur_chemise" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.longueur_chemise ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.longueur_chemise ? 'true' : 'false'}
                    aria-describedby={errors.longueur_chemise ? 'longueur_chemise-error' : undefined}
                  />
                  {errors.longueur_chemise && (
                    <p id="longueur_chemise-error" className="mt-1 text-red-500 text-sm">
                      {errors.longueur_chemise}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="tour_ventre" className="block text-gray-700 mb-2">
                    Tour de ventre <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="tour_ventre" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.tour_ventre ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.tour_ventre ? 'true' : 'false'}
                    aria-describedby={errors.tour_ventre ? 'tour_ventre-error' : undefined}
                  />
                  {errors.tour_ventre && (
                    <p id="tour_ventre-error" className="mt-1 text-red-500 text-sm">
                      {errors.tour_ventre}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="longueur_tunique" className="block text-gray-700 mb-2">
                    Longueur tunique <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="longueur_tunique" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.longueur_tunique ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.longueur_tunique ? 'true' : 'false'}
                    aria-describedby={errors.longueur_tunique ? 'longueur_tunique-error' : undefined}
                  />
                  {errors.longueur_tunique && (
                    <p id="longueur_tunique-error" className="mt-1 text-red-500 text-sm">
                      {errors.longueur_tunique}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="longueur_kaftan" className="block text-gray-700 mb-2">
                    Longueur kaftan <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="longueur_kaftan" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.longueur_kaftan ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.longueur_kaftan ? 'true' : 'false'}
                    aria-describedby={errors.longueur_kaftan ? 'longueur_kaftan-error' : undefined}
                  />
                  {errors.longueur_kaftan && (
                    <p id="longueur_kaftan-error" className="mt-1 text-red-500 text-sm">
                      {errors.longueur_kaftan}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="ceinture" className="block text-gray-700 mb-2">
                    Ceinture <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="ceinture" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.ceinture ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.ceinture ? 'true' : 'false'}
                    aria-describedby={errors.ceinture ? 'ceinture-error' : undefined}
                  />
                  {errors.ceinture && (
                    <p id="ceinture-error" className="mt-1 text-red-500 text-sm">
                      {errors.ceinture}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="tour_hanche" className="block text-gray-700 mb-2">
                    Tour de hanche <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="tour_hanche" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.tour_hanche ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.tour_hanche ? 'true' : 'false'}
                    aria-describedby={errors.tour_hanche ? 'tour_hanche-error' : undefined}
                  />
                  {errors.tour_hanche && (
                    <p id="tour_hanche-error" className="mt-1 text-red-500 text-sm">
                      {errors.tour_hanche}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="tour_cuisse" className="block text-gray-700 mb-2">
                    Tour de cuisse <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="tour_cuisse" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.tour_cuisse ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.tour_cuisse ? 'true' : 'false'}
                    aria-describedby={errors.tour_cuisse ? 'tour_cuisse-error' : undefined}
                  />
                  {errors.tour_cuisse && (
                    <p id="tour_cuisse-error" className="mt-1 text-red-500 text-sm">
                      {errors.tour_cuisse}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="longueur_pantalon" className="block text-gray-700 mb-2">
                    Longueur pantalon <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="longueur_pantalon" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.longueur_pantalon ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.longueur_pantalon ? 'true' : 'false'}
                    aria-describedby={errors.longueur_pantalon ? 'longueur_pantalon-error' : undefined}
                  />
                  {errors.longueur_pantalon && (
                    <p id="longueur_pantalon-error" className="mt-1 text-red-500 text-sm">
                      {errors.longueur_pantalon}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="mb-4">
                  <label htmlFor="cou" className="block text-gray-700 mb-2">
                    Cou <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="cou" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.cou ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.cou ? 'true' : 'false'}
                    aria-describedby={errors.cou ? 'cou-error' : undefined}
                  />
                  {errors.cou && (
                    <p id="cou-error" className="mt-1 text-red-500 text-sm">
                      {errors.cou}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="epaule" className="block text-gray-700 mb-2">
                    Épaule <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="epaule" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.epaule ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.epaule ? 'true' : 'false'}
                    aria-describedby={errors.epaule ? 'epaule-error' : undefined}
                  />
                  {errors.epaule && (
                    <p id="epaule-error" className="mt-1 text-red-500 text-sm">
                      {errors.epaule}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="manche_courte" className="block text-gray-700 mb-2">
                    Manche courte <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="manche_courte" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.manche_courte ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.manche_courte ? 'true' : 'false'}
                    aria-describedby={errors.manche_courte ? 'manche_courte-error' : undefined}
                  />
                  {errors.manche_courte && (
                    <p id="manche_courte-error" className="mt-1 text-red-500 text-sm">
                      {errors.manche_courte}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="manche_longue" className="block text-gray-700 mb-2">
                    Manche longue <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="manche_longue" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.manche_longue ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.manche_longue ? 'true' : 'false'}
                    aria-describedby={errors.manche_longue ? 'manche_longue-error' : undefined}
                  />
                  {errors.manche_longue && (
                    <p id="manche_longue-error" className="mt-1 text-red-500 text-sm">
                      {errors.manche_longue}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="poitrine" className="block text-gray-700 mb-2">
                    Poitrine <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="poitrine" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.poitrine ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.poitrine ? 'true' : 'false'}
                    aria-describedby={errors.poitrine ? 'poitrine-error' : undefined}
                  />
                  {errors.poitrine && (
                    <p id="poitrine-error" className="mt-1 text-red-500 text-sm">
                      {errors.poitrine}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="tour_bras" className="block text-gray-700 mb-2">
                    Tour de bras <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="tour_bras" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.tour_bras ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.tour_bras ? 'true' : 'false'}
                    aria-describedby={errors.tour_bras ? 'tour_bras-error' : undefined}
                  />
                  {errors.tour_bras && (
                    <p id="tour_bras-error" className="mt-1 text-red-500 text-sm">
                      {errors.tour_bras}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="longueur_chemise" className="block text-gray-700 mb-2">
                    Longueur chemise <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="longueur_chemise" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.longueur_chemise ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.longueur_chemise ? 'true' : 'false'}
                    aria-describedby={errors.longueur_chemise ? 'longueur_chemise-error' : undefined}
                  />
                  {errors.longueur_chemise && (
                    <p id="longueur_chemise-error" className="mt-1 text-red-500 text-sm">
                      {errors.longueur_chemise}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="tour_ventre" className="block text-gray-700 mb-2">
                    Tour de ventre <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="tour_ventre" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.tour_ventre ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.tour_ventre ? 'true' : 'false'}
                    aria-describedby={errors.tour_ventre ? 'tour_ventre-error' : undefined}
                  />
                  {errors.tour_ventre && (
                    <p id="tour_ventre-error" className="mt-1 text-red-500 text-sm">
                      {errors.tour_ventre}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="longueur_tailleur" className="block text-gray-700 mb-2">
                    Longueur tailleur 3/4 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="longueur_tailleur" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.longueur_tailleur ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.longueur_tailleur ? 'true' : 'false'}
                    aria-describedby={errors.longueur_tailleur ? 'longueur_tailleur-error' : undefined}
                  />
                  {errors.longueur_tailleur && (
                    <p id="longueur_tailleur-error" className="mt-1 text-red-500 text-sm">
                      {errors.longueur_tailleur}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="longueur_robe" className="block text-gray-700 mb-2">
                    Longueur robe longue <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="longueur_robe" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.longueur_robe ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.longueur_robe ? 'true' : 'false'}
                    aria-describedby={errors.longueur_robe ? 'longueur_robe-error' : undefined}
                  />
                  {errors.longueur_robe && (
                    <p id="longueur_robe-error" className="mt-1 text-red-500 text-sm">
                      {errors.longueur_robe}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="ceinture" className="block text-gray-700 mb-2">
                    Ceinture <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="ceinture" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.ceinture ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.ceinture ? 'true' : 'false'}
                    aria-describedby={errors.ceinture ? 'ceinture-error' : undefined}
                  />
                  {errors.ceinture && (
                    <p id="ceinture-error" className="mt-1 text-red-500 text-sm">
                      {errors.ceinture}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="tour_hanche" className="block text-gray-700 mb-2">
                    Tour de hanche <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="tour_hanche" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.tour_hanche ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.tour_hanche ? 'true' : 'false'}
                    aria-describedby={errors.tour_hanche ? 'tour_hanche-error' : undefined}
                  />
                  {errors.tour_hanche && (
                    <p id="tour_hanche-error" className="mt-1 text-red-500 text-sm">
                      {errors.tour_hanche}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="tour_cuisse" className="block text-gray-700 mb-2">
                    Tour de cuisse <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="tour_cuisse" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.tour_cuisse ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.tour_cuisse ? 'true' : 'false'}
                    aria-describedby={errors.tour_cuisse ? 'tour_cuisse-error' : undefined}
                  />
                  {errors.tour_cuisse && (
                    <p id="tour_cuisse-error" className="mt-1 text-red-500 text-sm">
                      {errors.tour_cuisse}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="longueur_pantalon" className="block text-gray-700 mb-2">
                    Longueur pantalon <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="longueur_pantalon" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.longueur_pantalon ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.longueur_pantalon ? 'true' : 'false'}
                    aria-describedby={errors.longueur_pantalon ? 'longueur_pantalon-error' : undefined}
                  />
                  {errors.longueur_pantalon && (
                    <p id="longueur_pantalon-error" className="mt-1 text-red-500 text-sm">
                      {errors.longueur_pantalon}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="longueur_jupe" className="block text-gray-700 mb-2">
                    Longueur jupe 3/4 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="longueur_jupe" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.longueur_jupe ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.longueur_jupe ? 'true' : 'false'}
                    aria-describedby={errors.longueur_jupe ? 'longueur_jupe-error' : undefined}
                  />
                  {errors.longueur_jupe && (
                    <p id="longueur_jupe-error" className="mt-1 text-red-500 text-sm">
                      {errors.longueur_jupe}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="tour_taille" className="block text-gray-700 mb-2">
                    Tour de taille <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="tour_taille" 
                    onChange={handleChange} 
                    className={`w-full border ${
                      errors.tour_taille ? 'border-red-500' : 'border-gray-300'
                    } rounded-sm px-4 py-2 focus:outline-none focus:border-kc-gold`}
                    aria-invalid={errors.tour_taille ? 'true' : 'false'}
                    aria-describedby={errors.tour_taille ? 'tour_taille-error' : undefined}
                  />
                  {errors.tour_taille && (
                    <p id="tour_taille-error" className="mt-1 text-red-500 text-sm">
                      {errors.tour_taille}
                    </p>
                  )}
                </div>
              </div>
            )}


            {/* Bouton d'envoi */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="kc-button px-6 py-2 uppercase text-sm tracking-wider transition-colors duration-300"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Section pied de page */}
      <div className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-2">MENSURATIONS EN LIGNE</h2>
              <p className="text-gray-400 text-sm">Saisir sans déplacement toutes vos mesures directement</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-medium mb-4 uppercase">À PROPOS</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Khalil Collection se centre sur la passion du designer qui vous aide à créer des pièces uniques parfaitement ajustées à votre silhouette.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 uppercase">NOS CONTACTS</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">📍</span> Point E, Dakar 12 Rue Kaolack Taf
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📞</span> +221 77 659 97 96
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✉️</span> contact@btoure.com
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 uppercase">SUIVEZ-NOUS</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" className="text-white hover:text-kc-gold transition-colors">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="https://instagram.com" className="text-white hover:text-kc-gold transition-colors">
                    <FaInstagram size={20} />
                  </a>
                </div>
                <div className="mt-6">
                  <button className="border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-gray-900 transition-colors">
                    JE PRENDS MES MESURES
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-500 text-xs">
              © BTouré. Tous droits réservés
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mensurations;
