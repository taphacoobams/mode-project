import { useState } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';
import { validateNewsletterForm } from '../../utils/validationUtils';

const Newsletter = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate email
    const errors = validateNewsletterForm({ email });
    
    if (errors.email) {
      setError(errors.email);
      return;
    }
    
    // Clear any previous errors
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-medium mb-4">Newsletter</h3>
      <p className="text-sm mb-4">
        Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives.
      </p>
      
      {isSubmitted ? (
        <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-sm">
          <FiCheck className="mr-2" />
          <span>Merci pour votre inscription!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              placeholder="Votre adresse email"
              className={`w-full py-3 pl-10 pr-4 bg-white border ${
                error ? 'border-red-500' : 'border-gray-300'
              } rounded-sm focus:outline-none focus:border-primary`}
              aria-label="Adresse email pour la newsletter"
              disabled={isSubmitting}
            />
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          {error && (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          )}
          
          <button
            type="submit"
            className="mt-3 w-full bg-primary text-white py-3 px-4 rounded-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Inscription en cours...' : 'S\'inscrire'}
          </button>
        </form>
      )}
      
      <p className="text-xs mt-3 text-gray-500">
        En vous inscrivant, vous acceptez notre politique de confidentialité et de recevoir des emails de Khalil Collection.
      </p>
    </div>
  );
};

export default Newsletter;
