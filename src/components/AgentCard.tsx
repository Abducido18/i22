import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

interface AgentCardProps {
  image: string;
  name: string;
  position: string;
  phone: string;
  email: string;
}

const AgentCard: React.FC<AgentCardProps> = ({
  image,
  name,
  position,
  phone,
  email
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-blue-200">{position}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-gray-700">{phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-gray-700">{email}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="bg-blue-50 p-2 rounded-full text-blue-600 hover:bg-blue-100 transition-all">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="bg-blue-50 p-2 rounded-full text-blue-600 hover:bg-blue-100 transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="bg-blue-50 p-2 rounded-full text-blue-600 hover:bg-blue-100 transition-all">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;