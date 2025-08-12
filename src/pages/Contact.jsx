import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import PageHeader from '../components/ui/PageHeader';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
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

      <PageHeader 
        title="Contactez-nous"
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'Contact' }
        ]}
      />
      
      <div className="py-16">
        <div className="container">
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-kc-gold/10 flex items-center justify-center mb-4">
                <FiPhone size={24} className="text-kc-gold" />
              </div>
              <h3 className="text-xl font-heading font-medium mb-2 text-kc-black">Téléphone</h3>
              <a href="tel:+221784631010" className="text-gray-600 hover:text-kc-gold transition-colors">
                +221 78 463 10 10
              </a>
            </div>
            
            <div className="bg-white p-8 shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-kc-gold/10 flex items-center justify-center mb-4">
                <FiMapPin size={24} className="text-kc-gold" />
              </div>
              <h3 className="text-xl font-heading font-medium mb-2 text-kc-black">Adresse</h3>
              <address className="text-gray-600 not-italic">
                Fann Hock Rue 55X70<br />
                Dakar, Sénégal
              </address>
            </div>
            
            <div className="bg-white p-8 shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-kc-gold/10 flex items-center justify-center mb-4">
                <FiMail size={24} className="text-kc-gold" />
              </div>
              <h3 className="text-xl font-heading font-medium mb-2 text-kc-black">Email</h3>
              <a href="mailto:khalilcollections@gmail.com" className="text-gray-600 hover:text-kc-gold transition-colors">
                khalilcollections@gmail.com
              </a>
            </div>
          </div>
          
          {/* Carte Google Maps */}
          <div className="mt-16">
            <h2 className="text-2xl font-heading font-bold text-kc-black mb-6 max-w-4xl mx-auto">
              Nous trouver
            </h2>
            <div className="max-w-4xl mx-auto h-96 bg-gray-200 rounded-lg overflow-hidden">
              <GoogleMap />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="mt-16">
            <h2 className="text-2xl font-heading font-bold text-kc-black mb-6 max-w-4xl mx-auto">Envoyez-nous un message</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
              <ContactForm onSubmit={handleFormSubmit} formSubmitted={formSubmitted} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
