import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const WhatsAppButton = () => {
  // Utiliser useLocation pour accéder à l'URL actuelle
  const location = useLocation();
  
  // Vérifier si nous sommes sur une page de détail produit
  const isProductPage = (location.pathname.includes('/creations/') && location.pathname.split('/').length > 3) || 
                      (location.pathname.includes('/product/') && location.pathname.split('/').length > 2);
  
  // Construire le message
  let message = "Bonjour, je vous contacte depuis votre site Khalil Collection";
  
  // Ajouter les informations du produit si nous sommes sur une page produit
  if (isProductPage) {
    const productRef = location.pathname.split('/').pop().toUpperCase();
    message += `\n\nJe suis intéressé(e) par ce produit: ${productRef} sur https://khalil-collection.vercel.app${location.pathname}`;
  }
  
  // Numéro de téléphone WhatsApp
  const phoneNumber = "221784631010";
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
      aria-label="Contacter sur WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
