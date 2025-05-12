import React from 'react';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../assets/i22 cover.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="flex justify-start mb-6">
              <img src={logo} className="align-left" />
            </div>
            <p className="text-gray-400 mb-6">En i22 Inmobiliaria conectamos personas con propiedades que representan calidad de vida, inversión y crecimiento.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#featured" className="text-gray-400 hover:text-white transition-colors">Vender</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Propiedades</a></li>
            </ul>
          </div>
        
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Información de Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Liquidambar<br />Veraruz, Ver</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">229420212</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">chox@inmuebles</span>
              </li>
            </ul>
      
          </div>
        </div>
      </div>
      
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 I22 Inmobiliaria. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;