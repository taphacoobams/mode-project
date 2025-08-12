import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

/**
 * Composant Modal réutilisable
 * @param {boolean} isOpen - État d'ouverture de la modal
 * @param {function} onClose - Fonction de fermeture de la modal
 * @param {React.ReactNode} children - Contenu de la modal
 * @param {string} className - Classes CSS additionnelles pour le contenu
 */
const Modal = ({ isOpen, onClose, children, className = '' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[800px] bg-white z-50 shadow-2xl rounded-sm ${className}`}
          >
            {/* Close button */}
            <button
              className="absolute right-3 top-3 text-gray-500 hover:text-kc-black z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"
              onClick={onClose}
              aria-label="Fermer"
            >
              <FiX size={20} />
            </button>
            
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
