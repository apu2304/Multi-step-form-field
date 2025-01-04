import React, { useState } from 'react';

const ToggleButton = ({onToggle, isYearly}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div onClick={onToggle} className="flex flex-row gap-5">
      <div className={`text-sm font-bold ${!isYearly ? 'text-blue-600' : 'text-gray-600'}`}>monthly</div>
      <div>
      <div 
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isToggled ? 'bg-blue-500' : 'bg-gray-300'}`}
      onClick={handleToggle}
    >
      <div 
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isToggled ? 'translate-x-6' : ''}`}
      ></div>
      {/*<span className={`ml-2 text-sm font-medium ${isToggled ? 'text-white' : 'text-gray-700'}`}>{isToggled ? 'Yearly' : 'Monthly'}</span> */}
    </div>
      </div>
    <div className={`text-sm font-bold ${isYearly ? 'text-blue-600' : 'text-gray-600'}`}>yearly</div>
    </div>
  );
};

export default ToggleButton;