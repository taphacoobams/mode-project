import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ productName = '' }) => {
  // Message de base pour contacter le propriétaire
  const baseMessage = "Bonjour, je vous contacte depuis votre site Khalil Collection";
  
  // Si un nom de produit est fourni, ajouter des informations sur le produit
  const message = productName 
    ? `Je suis intéressé(e) par ce produit: ${productName} sur https://khalil-collection.vercel.app/` 
    : baseMessage;
  
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
