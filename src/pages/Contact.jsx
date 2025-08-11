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
        <title>Contact | I. K. MBENGUE - La mode africaine à un autre niveau</title>
        <meta name="description" content="Contactez I. K. MBENGUE pour toute question concernant nos créations, commandes ou collaborations. Notre équipe est à votre disposition." />
        <meta property="og:title" content="Contact | I. K. MBENGUE - La mode africaine à un autre niveau" />
        <meta property="og:description" content="Contactez I. K. MBENGUE pour toute question concernant nos créations, commandes ou collaborations. Notre équipe est à votre disposition." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://btoure.com/contact" />
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
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FiPhone size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Téléphone</h3>
              <a href="tel:+22500000000" className="text-gray-600 hover:text-primary transition-colors">
                +225 00 00 00 00
              </a>
            </div>
            
            <div className="bg-white p-8 shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FiMapPin size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Adresse</h3>
              <address className="text-gray-600 not-italic">
                Abidjan, Côte d'Ivoire
              </address>
            </div>
            
            <div className="bg-white p-8 shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FiMail size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <a href="mailto:contact@ikmbengue.com" className="text-gray-600 hover:text-primary transition-colors">
                contact@ikmbengue.com
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Map */}
            <div className="h-[400px] bg-gray-100">
              <GoogleMap />
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-serif font-bold mb-6">Envoyez-nous un message</h2>
              <ContactForm onSubmit={handleFormSubmit} formSubmitted={formSubmitted} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
