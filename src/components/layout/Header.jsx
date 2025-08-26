import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiMenu, FiChevronDown } from 'react-icons/fi';
import SearchModal from '../ui/SearchModal';

const NavItem = ({ item, isScrolled }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  
  // Nettoyer le timeout lors du démontage du composant
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  
  const handleMouseEnter = () => {
    // Annuler tout délai de fermeture en cours
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setSubmenuOpen(true);
  };
  
  const handleMouseLeave = () => {
    // Ajouter un délai avant de fermer le sous-menu
    timeoutRef.current = setTimeout(() => {
      setSubmenuOpen(false);
    }, 800); // 800ms de délai avant fermeture pour donner plus de temps à l'utilisateur
  };
  
  return (
    <li 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.hasSubmenu ? (
        <div>
          <Link 
            to={item.path}
            className={`flex items-center text-sm font-medium uppercase tracking-wider transition-colors hover:text-kc-gold ${
              submenuOpen ? 'text-kc-gold' : isScrolled ? 'text-kc-white' : 'text-kc-black'
            }`}
          >
            {item.name}
            <FiChevronDown className="ml-1" size={14} />
          </Link>
          
          {submenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50 py-6 px-4 ${item.name === 'Nos créations' ? 'w-[600px]' : 'w-[300px]'}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`grid ${item.name === 'Nos créations' ? 'grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {item.submenu.map((subItem) => (
                  <div key={subItem.name} className="">
                    {item.name === 'Nos créations' ? (
                      <Link 
                        to={subItem.path}
                        className="font-bold text-kc-black uppercase mb-3 hover:text-kc-gold transition-colors block"
                      >
                        {subItem.name}
                      </Link>
                    ) : (
                      <Link 
                        to={subItem.path}
                        className="block text-kc-black hover:text-kc-gold transition-colors font-medium"
                      >
                        {subItem.name}
                      </Link>
                    )}
                    {subItem.submenu && (
                      <ul className="space-y-2 mt-2">
                        {subItem.submenu.map((subSubItem) => (
                          <li key={subSubItem.name}>
                            <Link
                              to={subSubItem.path}
                              className="block text-kc-black hover:text-kc-gold transition-colors"
                            >
                              {subSubItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `text-sm font-medium uppercase tracking-wider transition-colors hover:text-kc-gold ${
              isActive ? 'text-kc-gold' : isScrolled ? 'text-kc-white' : 'text-kc-black'
            }`
          }
        >
          {item.name}
        </NavLink>
      )}
    </li>
  );
};

const MobileNavItem = ({ item, setMobileMenuOpen, setActiveSubmenu }) => {
  const { pathname } = useLocation();
  
  // Déterminer si cet élément de menu correspond à la page actuelle
  const isItemActive = () => {
    // Uniquement pour "Nos créations"
    if (item.name === 'Nos créations') {
      return pathname.includes('/creations');
    }
    return false;
  };
  
  // Ouvrir le sous-menu quand on clique sur la flèche
  const handleSubmenuClick = (e) => {
    e.preventDefault();
    setActiveSubmenu(item.name);
  };

  return (
    <li className="py-3 border-b border-gray-100">
      {item.name === 'Nos créations' ? (
        <div className="flex justify-between items-center w-full">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `block text-base font-medium transition-colors hover:text-kc-gold flex-grow ${
                isActive || isItemActive() ? 'text-kc-gold' : 'text-kc-black'
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </NavLink>
          <button 
            onClick={handleSubmenuClick}
            className="text-lg text-kc-black hover:text-kc-gold transition-colors px-2 w-10 text-center"
            aria-label={`Ouvrir le sous-menu ${item.name}`}
          >
            ›
          </button>
        </div>
      ) : item.hasSubmenu ? (
        <div
          onClick={handleSubmenuClick}
          className="flex justify-between items-center w-full text-base font-medium transition-colors hover:text-kc-gold cursor-pointer text-kc-black"
        >
          <span>{item.name}</span>
          <span className="text-lg px-2 w-10 text-center">›</span>
        </div>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `block text-base font-medium transition-colors hover:text-kc-gold ${
              isActive ? 'text-kc-gold' : 'text-kc-black'
            }`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.name}
        </NavLink>
      )}
    </li>
  );
};

// Ce composant n'est plus utilisé mais conservé pour référence future
// const MobileSubmenuItem = ({ item, setMobileMenuOpen }) => {
//   return (
//     <li className="py-3 border-b border-gray-100">
//       <NavLink
//         to={item.path}
//         className={({ isActive }) =>
//           `block text-base font-medium transition-colors hover:text-kc-gold ${
//             isActive ? 'text-kc-gold' : 'text-kc-black'
//           }`
//         }
//         onClick={() => setMobileMenuOpen(false)}
//       >
//         {item.name}
//       </NavLink>
//     </li>
//   );
// };

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Détecter le scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Détecter la page actuelle pour activer le sous-menu correspondant
  useEffect(() => {
    // Toujours réinitialiser à la vue principale quand on ouvre le menu
    // Le composant MobileNavItem s'occupera d'afficher le texte actif en doré
    if (mobileMenuOpen) {
      setActiveSubmenu(null);
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { 
      name: 'Notre marque', 
      path: '#',
      hasSubmenu: true,
      submenu: [
        { name: 'Le designer', path: '/designer' },
        { name: 'Vos mensurations', path: '/mensurations' },
        { name: 'Chèque cadeau', path: '/cheque-cadeau' },
      ]
    },
    { 
      name: 'Nos créations', 
      path: '/creations',
      hasSubmenu: true,
      submenu: [
        { 
          name: 'Homme', 
          path: '/creations/productcategory/homme',
          submenu: [
            { name: 'Chemises', path: '/creations/productcategory/homme/chemises' },
            { name: 'Pantalons', path: '/creations/productcategory/homme/pantalons' },
            { name: 'Costumes africains', path: '/creations/productcategory/homme/costumes-africains' },
            { name: 'Costumes européens', path: '/creations/productcategory/homme/costumes-europeens' },
            { name: 'Boubous Traditionnels', path: '/creations/productcategory/homme/boubous-traditionnels' },
            { name: 'Grands boubous', path: '/creations/productcategory/homme/grands-boubous' },
            { name: 'Broderies', path: '/creations/productcategory/homme/broderies' },
            { name: 'Pliage', path: '/creations/productcategory/homme/pliage' },
            { name: 'Tenues personnalisées', path: '/creations/productcategory/homme/tenues-personnalisees' },
          ]
        },
        { 
          name: 'Femme', 
          path: '/creations/productcategory/femme',
          submenu: [
            { name: 'Chemises', path: '/creations/productcategory/femme/chemises' },
            { name: 'Pantalons', path: '/creations/productcategory/femme/pantalons' },
            { name: 'Costumes africains', path: '/creations/productcategory/femme/costumes-africains' },
            { name: 'Grands boubous', path: '/creations/productcategory/femme/grands-boubous' },
          ]
        },
        { 
          name: 'Accessoires', 
          path: '/creations/productcategory/accessoires',
          submenu: [
            { name: 'Chaussures', path: '/creations/productcategory/accessoires/chaussures' },
            { name: 'Bonnet', path: '/creations/productcategory/accessoires/bonnet' },
            { name: 'Boutons manchettes', path: '/creations/productcategory/accessoires/boutons-manchettes' },
            { name: 'Autres accessoires', path: '/creations/productcategory/accessoires/autres-accessoires' },
          ]
        },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-kc-black shadow-md py-2 text-kc-white' : 'bg-transparent py-4 text-kc-black'
      }`}
    >
      <div className="container px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <img 
            src="/logo.png" 
            alt="Khalil Collection" 
            className="h-12 w-auto" 
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} isScrolled={isScrolled} />
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center space-x-4">
          <button 
            aria-label="Rechercher"
            className={`p-2 ${isScrolled ? 'text-kc-white' : 'text-kc-black'} hover:text-kc-gold transition-colors`}
            onClick={() => setSearchModalOpen(true)}
          >
            <FiSearch size={20} />
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className={`p-2 ${isScrolled ? 'text-kc-white' : 'text-kc-black'} md:hidden`}
            onClick={() => {
              // Toujours ouvrir le menu principal (pas de sous-menu) quand on clique sur le bouton hamburger
              setActiveSubmenu(null);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay sombre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            className="fixed top-0 left-0 w-[77.7%] sm:w-96 md:w-96 h-full bg-white shadow-lg md:hidden overflow-y-auto z-50"
          >
          {activeSubmenu ? (
            // Sous-menu (par exemple, pour "La marque")
            <div>
              <div className="flex items-center p-4 border-b">
                <button
                  className="p-2 mr-2 text-kc-black hover:text-kc-gold transition-colors"
                  onClick={() => setActiveSubmenu(null)}
                  aria-label="Retour"
                >
                  <span className="text-lg">‹</span>
                </button>
                <h2 className="text-base font-medium">{activeSubmenu}</h2>
              </div>
              
              <nav className="p-4">
                <ul className="flex flex-col">
                  {activeSubmenu === 'Notre marque' && (
                    <>
                      <li className="py-3 border-b border-gray-100">
                        <NavLink
                          to="/designer"
                          className={({ isActive }) =>
                            `block text-base font-medium transition-colors hover:text-kc-gold ${
                              isActive ? 'text-kc-gold' : 'text-kc-black'
                            }`
                          }
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Le designer
                        </NavLink>
                      </li>
                      <li className="py-3 border-b border-gray-100">
                        <NavLink
                          to="/mensurations"
                          className={({ isActive }) =>
                            `block text-base font-medium transition-colors hover:text-kc-gold ${
                              isActive ? 'text-kc-gold' : 'text-kc-black'
                            }`
                          }
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Vos mensurations
                        </NavLink>
                      </li>
                      <li className="py-3 border-b border-gray-100">
                        <NavLink
                          to="/cheque-cadeau"
                          className={({ isActive }) =>
                            `block text-base font-medium transition-colors hover:text-kc-gold ${
                              isActive ? 'text-kc-gold' : 'text-kc-black'
                            }`
                          }
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Chèque cadeau
                        </NavLink>
                      </li>
                    </>
                  )}
                  {activeSubmenu === 'Nos créations' && (
                    <>
                      <li className="py-3 border-b border-gray-100">
                        <div className="flex justify-between items-center w-full">
                          <NavLink
                            to="/creations/productcategory/homme"
                            className={({ isActive }) =>
                              `block text-base font-medium transition-colors hover:text-kc-gold flex-grow ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Homme
                          </NavLink>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const hommeItems = document.getElementById('homme-items');
                              const buttonText = e.currentTarget.querySelector('span');
                              if (hommeItems) {
                                hommeItems.classList.toggle('hidden');
                                if (buttonText) {
                                  buttonText.textContent = hommeItems.classList.contains('hidden') ? '+' : '-';
                                }
                              }
                            }}
                            className="text-lg text-kc-black hover:text-kc-gold transition-colors px-2 w-10 text-center"
                            aria-label="Ouvrir/fermer les catégories homme"
                          >
                            <span>+</span>
                          </button>
                        </div>
                      </li>
                      <div id="homme-items" className="hidden">
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/homme/chemises"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Chemises
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/homme/pantalons"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Pantalons
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/homme/costumes-africains"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Costumes africains
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/homme/costumes-europeens"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Costumes européens
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/homme/boubous-traditionnels"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Boubous Traditionnels
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/homme/grands-boubous"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Grands boubous
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/homme/broderies"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Broderies
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/homme/pliage"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Pliage
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/homme/tenues-personnalisees"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Tenues personnalisées
                          </NavLink>
                        </li>
                      </div>
                      
                      <li className="py-3 border-b border-gray-100 mt-4">
                        <div className="flex justify-between items-center w-full">
                          <NavLink
                            to="/creations/productcategory/femme"
                            className={({ isActive }) =>
                              `block text-base font-medium transition-colors hover:text-kc-gold flex-grow ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Femme
                          </NavLink>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const femmeItems = document.getElementById('femme-items');
                              const buttonText = e.currentTarget.querySelector('span');
                              if (femmeItems) {
                                femmeItems.classList.toggle('hidden');
                                if (buttonText) {
                                  buttonText.textContent = femmeItems.classList.contains('hidden') ? '+' : '-';
                                }
                              }
                            }}
                            className="text-lg text-kc-black hover:text-kc-gold transition-colors px-2 w-10 text-center"
                            aria-label="Ouvrir/fermer les catégories femme"
                          >
                            <span>+</span>
                          </button>
                        </div>
                      </li>
                      <div id="femme-items" className="hidden">
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/femme/chemises"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Chemises
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/femme/pantalons"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Pantalons
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/femme/costumes-africains"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Costumes africains
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/femme/grands-boubous"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Grands boubous
                          </NavLink>
                        </li>
                      </div>
                      
                      <li className="py-3 border-b border-gray-100 mt-4">
                        <div className="flex justify-between items-center w-full">
                          <NavLink
                            to="/creations/productcategory/accessoires"
                            className={({ isActive }) =>
                              `block text-base font-medium transition-colors hover:text-kc-gold flex-grow ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Accessoires
                          </NavLink>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const accessoiresItems = document.getElementById('accessoires-items');
                              const buttonText = e.currentTarget.querySelector('span');
                              if (accessoiresItems) {
                                accessoiresItems.classList.toggle('hidden');
                                if (buttonText) {
                                  buttonText.textContent = accessoiresItems.classList.contains('hidden') ? '+' : '-';
                                }
                              }
                            }}
                            className="text-lg text-kc-black hover:text-kc-gold transition-colors px-2 w-10 text-center"
                            aria-label="Ouvrir/fermer les catégories accessoires"
                          >
                            <span>+</span>
                          </button>
                        </div>
                      </li>
                      <div id="accessoires-items" className="hidden">
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/accessoires/chaussures"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Chaussures
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/accessoires/bonnet"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Bonnet
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/accessoires/boutons-manchettes"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Boutons manchettes
                          </NavLink>
                        </li>
                        <li className="py-3 border-b border-gray-100 pl-4">
                          <NavLink
                            to="/creations/productcategory/accessoires/autres-accessoires"
                            className={({ isActive }) =>
                              `block text-sm transition-colors hover:text-kc-gold ${
                                isActive ? 'text-kc-gold' : 'text-kc-black'
                              }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Autres accessoires
                          </NavLink>
                        </li>
                      </div>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          ) : (
            // Menu principal
            <>
              <div className="flex items-center p-4 border-b">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img 
                    src="/logo.png" 
                    alt="Khalil Collection" 
                    className="h-12 w-auto" 
                  />
                </Link>
              </div>
              
              <nav className="p-4">
                <ul className="flex flex-col">
                  <li className="py-3 border-b border-gray-100">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block text-base font-medium transition-colors hover:text-kc-gold ${
                          isActive ? 'text-kc-gold' : 'text-kc-black'
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Accueil
                    </NavLink>
                  </li>
                  
                  {navItems.slice(1).map((item) => (
                    <MobileNavItem 
                      key={item.name} 
                      item={item} 
                      setMobileMenuOpen={setMobileMenuOpen} 
                      setActiveSubmenu={setActiveSubmenu}
                    />
                  ))}
                </ul>
              </nav>
            </>
          )}
        </motion.div>
        </>
      )}
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </header>
  );
};

export default Header;