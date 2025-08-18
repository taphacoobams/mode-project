import { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaSnapchatGhost } from 'react-icons/fa';
import GoogleMap from '../components/contact/GoogleMap';
import ManifestoBanner from '../components/home/ManifestoBanner';

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

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('http://localhost:5000/api/send-email', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
      console.log('Email sent successfully:', response.data);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form submission status after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Khalil Collection - Mode & Broderie - C'est moi, c'est vous !</title>
        <meta name="description" content="Contactez Khalil Collection pour toute question concernant nos créations, commandes ou collaborations. Notre équipe est à votre disposition." />
        <meta property="og:title" content="Contact | Khalil Collection - Mode & Broderie - C'est moi, c'est vous !" />
        <meta property="og:description" content="Contactez Khalil Collection pour toute question concernant nos créations, commandes ou collaborations. Notre équipe est à votre disposition." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khalilcollection.com/contact" />
      </Helmet>

      {/* PageHeader supprimé */}
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">Contactez-nous</h2>
            <div className="w-16 h-1 bg-kc-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">Nous sommes à votre écoute pour toute question ou demande spécifique</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-kc-black">Nous écrire</h2>
              
              {formSubmitted ? (
                <div className="p-4 bg-green-100 text-green-700 rounded-md mb-4">
                  Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                </div>
              ) : null}
              
              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-md mb-4">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    {subjectThemes.map((theme) => (
                      <option key={theme.value} value={theme.value}>
                        {theme.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-kc-gold hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer Un Message'
                  )}
                </button>
              </form>
            </div>
            
            {/* Informations de contact */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-kc-black">Informations de contact</h2>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="mr-4 text-kc-gold">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700">+221 78 463 10 10</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="mr-4 text-kc-gold">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700">khalilcollections@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="mr-4 text-kc-gold">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700">Fann Hock Rue 55X70, Dakar, Sénégal</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 mt-8 text-kc-black">Horaires d'ouverture</h2>
              
              <div className="mb-2">
                <p className="text-gray-700">Lundi - Vendredi : 09h00 à 17h00</p>
              </div>
              
              <div className="mb-2">
                <p className="text-gray-700">Samedi : 09h00 à 13h00</p>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-700">Dimanche : Fermé</p>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-kc-black">Localisation</h2>
              
              <div className="rounded-lg overflow-hidden h-64 mb-6 border-2 border-kc-gold">
                <GoogleMap />
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-kc-black">
              Nous suivre
            </h2>
            <div className="w-16 h-1 bg-kc-gold mx-auto mb-6"></div>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <a 
                href="https://m.facebook.com/108168142221694/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FaFacebookF size={28} className="text-kc-gold hover:text-yellow-600 transition-colors" />
              </a>
              <a 
                href="https://instagram.com/khalilcollections" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FaInstagram size={28} className="text-kc-gold hover:text-yellow-600 transition-colors" />
              </a>
              <a 
                href="https://snapchat.com/add/khalilcollections" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FaSnapchatGhost size={28} className="text-kc-gold hover:text-yellow-600 transition-colors" />
              </a>
              <a 
                href="https://tiktok.com/@khalilcollections" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FaTiktok size={28} className="text-kc-gold hover:text-yellow-600 transition-colors" />
              </a>
              <a 
                href="https://youtube.com/khalilcollections" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FaYoutube size={28} className="text-kc-gold hover:text-yellow-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <ManifestoBanner />
    </>
  );
};

export default Contact;
