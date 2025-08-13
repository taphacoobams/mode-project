import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import SearchModal from '../ui/SearchModal';

const NavItem = ({ item, isScrolled }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);
  
  const handleMouseEnter = () => {
    setSubmenuOpen(true);
  };
  
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };
  
  return (
    <li 
      className="relative" 
      ref={submenuRef} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.hasSubmenu ? (
        <div>
          <button 
            className={`flex items-center text-sm font-medium uppercase tracking-wider transition-colors hover:text-kc-gold ${
              submenuOpen ? 'text-kc-gold' : isScrolled ? 'text-kc-textLight' : 'text-kc-textDark'
            }`}
          >
            {item.name}
            <FiChevronDown className="ml-1" size={14} />
          </button>
          
          {submenuOpen && item.name === 'Nos créations' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-md overflow-hidden z-50 py-6 px-4"
            >
              <div className="grid grid-cols-3 gap-6">
                {item.submenu.map((subItem) => (
                  <div key={subItem.name} className="">
                    <h3 className="font-bold text-kc-black uppercase mb-3">{subItem.name}</h3>
                    {subItem.submenu && (
                      <ul className="space-y-2">
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
          
          {submenuOpen && item.name !== 'Nos créations' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
            >
              <div className="grid grid-cols-1 gap-0">
                {item.submenu.map((subItem) => (
                  <div key={subItem.name} className="group relative">
                    <Link 
                      to={subItem.path}
                      className="block px-4 py-2 text-kc-black hover:bg-kc-gold/10 font-medium"
                    >
                      {subItem.name}
                    </Link>
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
              isActive ? 'text-kc-gold' : isScrolled ? 'text-kc-textLight' : 'text-kc-textDark'
            }`
          }
        >
          {item.name}
        </NavLink>
      )}
    </li>
  );
};

const MobileNavItem = ({ item, setMobileMenuOpen }) => {
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  
  return (
    <li>
      {item.hasSubmenu ? (
        <div>
          <button 
            className="flex items-center justify-between w-full text-sm font-medium uppercase tracking-wider transition-colors hover:text-kc-gold text-kc-textLight"
            onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
          >
            <span>{item.name}</span>
            <FiChevronDown className={`ml-1 transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`} size={16} />
          </button>
          
          {mobileSubmenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 pl-4 border-l border-kc-gold/30"
            >
              {item.submenu.map((subItem) => (
                <div key={subItem.name} className="mb-2">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={subItem.path}
                      className="block py-1 text-sm font-medium text-kc-textLight hover:text-kc-gold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  </div>
                  
                  {subItem.submenu && (
                    <div className="pl-4 mt-1 border-l border-kc-gold/20">
                      {subItem.submenu.map((subSubItem) => (
                        <Link
                          key={subSubItem.name}
                          to={subSubItem.path}
                          className="block py-1 text-sm text-kc-textLight/80 hover:text-kc-gold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subSubItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `block py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-kc-gold ${
              isActive ? 'text-kc-gold' : 'text-kc-textLight'
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

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
      path: '/nos-creations',
      hasSubmenu: true,
      submenu: [
        { 
          name: 'Homme', 
          path: '/nos-creations/productcategory/homme',
          submenu: [
            { name: 'Chemises', path: '/nos-creations/productcategory/homme/chemises' },
            { name: 'Pantalons', path: '/nos-creations/productcategory/homme/pantalons' },
            { name: 'Costumes africains', path: '/nos-creations/productcategory/homme/costumes-africains' },
            { name: 'Costumes européens', path: '/nos-creations/productcategory/homme/costumes-europeens' },
            { name: 'Boubous Traditionnels', path: '/nos-creations/productcategory/homme/boubous-traditionnelles' },
            { name: 'Grand boubou', path: '/nos-creations/productcategory/homme/grand-boubou' },
            { name: 'Broderies', path: '/nos-creations/productcategory/homme/broderies' },
            { name: 'Fillage', path: '/nos-creations/productcategory/homme/fillage' },
            { name: 'Tenues personnalisées', path: '/nos-creations/productcategory/homme/tenues-personnalisees' },
          ]
        },
        { 
          name: 'Femme', 
          path: '/nos-creations/productcategory/femme',
          submenu: [
            { name: 'Chemises', path: '/nos-creations/productcategory/femme/chemises' },
            { name: 'Pantalons', path: '/nos-creations/productcategory/femme/pantalons' },
            { name: 'Costumes africains', path: '/nos-creations/productcategory/femme/costumes-africains' },
            { name: 'Grand boubou', path: '/nos-creations/productcategory/femme/grand-boubou' },
          ]
        },
        { 
          name: 'Accessoires', 
          path: '/nos-creations/productcategory/accessoires',
          submenu: [
            { name: 'Chaussures', path: '/nos-creations/productcategory/accessoires/chaussures' },
            { name: 'Bonnet', path: '/nos-creations/productcategory/accessoires/bonnet' },
            { name: 'Boutons manchettes', path: '/nos-creations/productcategory/accessoires/boutons-manchettes' },
            { name: 'Autres accessoires', path: '/nos-creations/productcategory/accessoires/autres-accessoires' },
          ]
        },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-kc-black shadow-md py-2 text-kc-textLight' : 'bg-transparent py-4 text-kc-textDark'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <img 
            src="/logo1.png" 
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
            className={`p-2 ${isScrolled ? 'text-kc-textLight' : 'text-kc-textDark'} hover:text-kc-gold transition-colors`}
            onClick={() => setSearchModalOpen(true)}
          >
            <FiSearch size={20} />
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className={`p-2 ${isScrolled ? 'text-kc-textLight' : 'text-kc-textDark'} hover:text-kc-gold transition-colors md:hidden`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-kc-black text-kc-textLight shadow-lg md:hidden"
        >
          <nav className="container py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <MobileNavItem key={item.name} item={item} setMobileMenuOpen={setMobileMenuOpen} />
              ))}
            </ul>
          </nav>
        </motion.div>
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
