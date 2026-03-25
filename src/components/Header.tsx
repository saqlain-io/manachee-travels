import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Compass } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Destinations', path: '/destinations' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <nav className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/" className={`flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tighter font-headline transition-colors ${
          scrolled ? 'text-primary' : 'text-white'
        }`}>
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${
            scrolled ? 'bg-primary text-white' : 'bg-white text-primary'
          }`}>
            <Compass size={20} className="md:w-6 md:h-6" />
          </div>
          <span className="hidden sm:inline">Manachee Travels</span>
          <span className="sm:hidden">Manachee</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center font-headline font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-secondary ${
                scrolled 
                  ? (location.pathname === link.path ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant')
                  : (location.pathname === link.path ? 'text-white border-b-2 border-white pb-1' : 'text-white/80')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking"
            className={`px-6 py-2.5 rounded-lg font-bold transition-all active:scale-95 flex items-center gap-2 ${
              scrolled ? 'bg-primary text-white hover:brightness-110' : 'bg-white text-primary hover:bg-white/90'
            }`}
          >
            Book Now <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Link 
            to="/booking"
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 ${
              scrolled ? 'bg-primary text-white' : 'bg-white text-primary'
            }`}
          >
            Book
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 font-headline font-bold text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/booking"
                className="bg-primary text-white px-6 py-4 rounded-xl text-center flex items-center justify-center gap-2"
              >
                Book Your Journey <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
