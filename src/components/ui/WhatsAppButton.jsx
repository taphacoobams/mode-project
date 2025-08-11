import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ accountId = 'YOUR_JOINCHAT_ACCOUNT_ID' }) => {
  // Integrate JoinChat script when component mounts
  useEffect(() => {
    // Create script element for JoinChat
    const script = document.createElement('script');
    script.src = 'https://cdn.joinchat.app/js/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    // Initialize JoinChat with the account ID
    window.JoinChatConfig = {
      app_id: accountId,
      button_tip: 'Besoin d\'aide?',
      button_text: 'Discuter sur WhatsApp',
      button_icon: 'whatsapp',
      button_position: 'right',
      button_delay: 1000
    };
    
    // Clean up function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
      delete window.JoinChatConfig;
    };
  }, [accountId]);

  // This is a fallback button that will be replaced by JoinChat's button
  // It's useful for SEO and accessibility purposes
  return (
    <div id="joinchat-container" className="hidden">
      <button 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50 flex items-center justify-center"
        aria-label="Contacter sur WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
