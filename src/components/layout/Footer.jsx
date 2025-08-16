import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTiktok, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kc-black text-kc-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">À propos</h3>
            <p className="text-gray-300 mb-4">
              Khalil Collection est une marque de mode africaine premium qui réinvente l'habillement traditionnel 
              avec une touche contemporaine. Nos créations sont fabriquées avec passion et savoir-faire.
            </p>
            <Link to="/designer" className="text-kc-gold hover:text-kc-gold/80 transition-colors">
              En savoir plus
            </Link>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Nos contacts</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <FaPhoneAlt className="text-kc-gold mr-3 text-lg" />
                <a href="tel:+221784631010" className="hover:text-kc-gold transition-colors">
                  +221 78 463 10 10
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-kc-gold mr-3 text-lg" />
                <a href="mailto:khalilcollections@gmail.com" className="hover:text-kc-gold transition-colors">
                  khalilcollections@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-kc-gold mr-3 text-lg mt-1" />
                <address className="not-italic">
                  Fann Hock Rue 55X70, Dakar, Sénégal
                </address>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://m.facebook.com/108168142221694/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kc-gold transition-colors"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a 
                href="https://instagram.com/khalilcollections" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kc-gold transition-colors"
              >
                <FaInstagram className="text-white" />
              </a>
              <a 
                href="https://snapchat.com/add/khalilcollections" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Snapchat"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kc-gold transition-colors"
              >
                <FaSnapchatGhost className="text-white" />
              </a>
              <a 
                href="https://tiktok.com/@khalilcollections" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kc-gold transition-colors"
              >
                <FaTiktok className="text-white" />
              </a>
              <a 
                href="https://youtube.com/khalilcollections" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kc-gold transition-colors"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
            {/* Bouton WhatsApp supprimé */}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Khalil Collection. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
