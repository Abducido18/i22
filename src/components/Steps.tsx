import React from 'react';

interface StepsProps {
  number: string;
  text: string;

}

const Steps: React.FC<StepsProps> = ({ number, text }) => {
  return (
    <div
    className="
      w-full mx-auto 
      sm:w-[60%] 
      md:w-[100%] 
      lg:w-full
      bg-white p-6 rounded-lg shadow-sm
      flex flex-row items-center gap-4
      hover:shadow-md transition-all
      hover:cursor-pointer
    "
  >
    <div className="text-customBlue text-xl sm:text-3xl font-bold">
      <h1 className="m-0 leading-none">{number}</h1>
    </div>
    <div className="flex-1 text-customBlue">
      <p className="text-sm sm:text-xl">{text}</p>
    </div>
  </div>

  );
};

export default Steps;