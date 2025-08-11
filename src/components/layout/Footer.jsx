import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">À propos</h3>
            <p className="text-gray-300 mb-4">
              I. K. MBENGUE est une marque de mode africaine premium qui réinvente l'habillement traditionnel 
              avec une touche contemporaine. Nos créations sont fabriquées avec passion et savoir-faire.
            </p>
            <Link to="/notre-marque" className="text-primary hover:text-primary/80 transition-colors">
              En savoir plus
            </Link>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Nos contacts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="block">Téléphone:</span>
                <a href="tel:+22500000000" className="hover:text-primary transition-colors">
                  +225 00 00 00 00
                </a>
              </li>
              <li>
                <span className="block">Email:</span>
                <a href="mailto:contact@ikmbengue.com" className="hover:text-primary transition-colors">
                  contact@ikmbengue.com
                </a>
              </li>
              <li>
                <span className="block">Adresse:</span>
                <address className="not-italic">
                  Abidjan, Côte d'Ivoire
                </address>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="https://wa.me/22500000000" 
                className="flex items-center space-x-2 bg-[#25D366] text-white py-2 px-4 rounded-sm hover:bg-[#25D366]/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} />
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} I. K. MBENGUE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
