import React, { useState, useEffect } from 'react';
import {Menu, X } from 'lucide-react';
import logo from '../assets/i22 cover.png';
import Scrollspy from 'react-scrollspy';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent py-5' :'bg-white shadow-md py-3' }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-24 lg:px-6 ">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img style={{ width: "120px" }} src={logo} alt="logo" />
            <p className="ml-5 text-customBlue text-sm flex item-start ">+52 2294342126</p>
          </a>

          {/* Desktop Menu */}
          <Scrollspy
            items={['home', 'vender', 'servicios', 'nosotros', 'contact']}
            currentClassName="text-customBlue font-semibold border-b-2 border-customBlue"
            offset={-100}
            className="hidden md:flex space-x-8"
          >
            <a href="#home" className="font-medium text-gray-700 hover:text-customBlue">Home</a>
            <a href="#vender" className="font-medium text-gray-700 hover:text-customBlue">Vender</a>
            <a href="#servicios" className="font-medium text-gray-700 hover:text-customBlue">Servicios</a>
            <a href="#nosotros" className="font-medium text-gray-700 hover:text-customBlue">Nosotros</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-customBlue">Contacto</a>
          </Scrollspy>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md text-gray-800'`}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-customBlue" /> : <Menu className="h-6 w-6 text-customBlue" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-5">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#vender" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Vender</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#nosotros" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;