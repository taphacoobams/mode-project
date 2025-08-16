import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTiktok, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ManifestoBanner = () => {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-kc-black">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Partie gauche - QR code et réseaux sociaux */}
          <div className="w-full md:w-1/4 flex flex-col items-center">
            <div className="bg-white p-2 rounded-md mb-4">
              <img 
                src="/qrcode.jpg" 
                alt="QR Code Khalil Collection" 
                className="w-32 h-32"
              />
            </div>
            <p className="text-kc-gold font-medium mb-2">Khalil Collection</p>
            <div className="flex space-x-2 mb-3">
              <a href="https://m.facebook.com/108168142221694/" className="bg-kc-gold w-8 h-8 rounded-md flex items-center justify-center hover:opacity-90">
                <FaFacebookF className="text-kc-black" />
              </a>
              <a href="https://instagram.com/khalilcollections" className="bg-kc-gold w-8 h-8 rounded-md flex items-center justify-center hover:opacity-90">
                <FaInstagram className="text-kc-black" />
              </a>
              <a href="https://snapchat.com/add/khalilcollections" className="bg-kc-gold w-8 h-8 rounded-md flex items-center justify-center hover:opacity-90">
                <FaSnapchatGhost className="text-kc-black" />
              </a>
              <a href="https://tiktok.com/@khalilcollections" className="bg-kc-gold w-8 h-8 rounded-md flex items-center justify-center hover:opacity-90">
                <FaTiktok className="text-kc-black" />
              </a>
              <a href="https://youtube.com/khalilcollections" className="bg-kc-gold w-8 h-8 rounded-md flex items-center justify-center hover:opacity-90">
                <FaYoutube className="text-kc-black" />
              </a>
            </div>
            <p className="text-kc-gold font-medium">Made in Sénégal</p>
          </div>

          {/* Partie centrale - Slogan et informations */}
          <div className="w-full md:w-2/4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-kc-gold text-3xl md:text-4xl font-script mb-8"
            >
              C'est moi, c'est vous !
            </motion.h2>
            
            <div className="bg-kc-gold/80 rounded-lg p-4 md:p-6 text-center">
              <h3 className="text-kc-black text-xl md:text-2xl font-bold mb-4">Styliste - Modéliste - Designer</h3>
              <p className="text-kc-black text-lg md:text-xl font-medium mb-4">Prêt à Porter sur Mesure</p>
              
              <div className="flex flex-col space-y-2 items-center">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-kc-black mr-2" />
                  <span className="text-kc-black">+221 78 463 10 10</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-kc-black mr-2" />
                  <span className="text-kc-black">khalilcollections@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Logo */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Khalil Collection Logo" 
              className="w-40 h-40 md:w-48 md:h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoBanner;
