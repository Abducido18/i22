import React from 'react';
import { ArrowUpSquare as LucideIcon } from 'lucide-react';



interface PropertyCardProps {
  icon: string; // Aceptar un componente React para el ícono
  text: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  icon,
  text
}) => {
  return (
    <div
    className="
      /* Móvil: 80% del contenedor, centrada */
      w-[80%] mx-auto 
      /* Tablets: 60% */
      sm:w-[60%] 
      /* MD+: 40% */
      md:w-[100%] 
      /* LG+: 100% de la celda de grid */
      lg:w-full

      bg-customBlue
      rounded-lg
      overflow-hidden
      shadow-sm
      border border-gray-100
      hover:shadow-md
      transition-all
      flex flex-col
    "
  >
        
      <div className='flex justify-center items-center'>
        <img src={icon} className="w-12 h-12 text-white mt-6 mb-7" />
      </div>

      <div className="p-7 mb-3">
        <p className="text-white text-base flex items-center">
          {text}
        </p>
      </div>

    </div>
  );
};

export default PropertyCard;