import React, { useState, useEffect } from 'react';
import { Menu, X, Bike } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Price List', href: '#/prices' },
    { name: '125cc Special', href: '#/125cc' },
    { name: 'New Models', href: '#/new-models' },
    { name: 'Buyer Guide', href: '#/guide' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/80 backdrop-blur-md border-slate-200/50 shadow-sm' : 'bg-slate-900/10 border-white/5 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-hero-red to-red-700 p-2.5 rounded-xl text-white shadow-lg shadow-red-500/20 group-hover:scale-105 transition-transform duration-300">
                <Bike className="h-6 w-6" />
              </div>
              <span className={`font-display font-extrabold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'} transition-colors`}>
                bd<span className="text-hero-red">Bike</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${scrolled ? 'text-slate-600 hover:text-hero-red hover:bg-red-50' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#/prices" className="ml-4 bg-hero-red text-white px-6 py-2.5 rounded-full font-bold shadow-glow hover:shadow-red-600/40 hover:bg-red-700 transition-all transform hover:-translate-y-0.5 active:scale-95">
              Check Prices
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl backdrop-blur-sm ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white bg-white/10 hover:bg-white/20'} transition-colors focus:outline-none`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-4 rounded-xl text-base font-bold text-slate-600 hover:text-hero-red hover:bg-red-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#/prices"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-4 mt-4 bg-hero-red text-white rounded-xl font-bold shadow-lg"
          >
            Check 2024 Prices
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;