import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kc-black text-kc-textLight pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">À propos</h3>
            <p className="text-gray-300 mb-4">
              Khalil Collection est une marque de mode africaine premium qui réinvente l'habillement traditionnel 
              avec une touche contemporaine. Nos créations sont fabriquées avec passion et savoir-faire.
            </p>
            <Link to="/notre-marque" className="text-kc-gold hover:text-kc-gold/80 transition-colors">
              En savoir plus
            </Link>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Nos contacts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="block">Téléphone:</span>
                <a href="tel:+221784631010" className="hover:text-kc-gold transition-colors">
                  +221 78 463 10 10
                </a>
              </li>
              <li>
                <span className="block">Email:</span>
                <a href="mailto:khalilcollections@gmail.com" className="hover:text-kc-gold transition-colors">
                  khalilcollections@gmail.com
                </a>
              </li>
              <li>
                <span className="block">Adresse:</span>
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
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kc-gold transition-colors"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kc-gold transition-colors"
              >
                <FaInstagram className="text-white" />
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
