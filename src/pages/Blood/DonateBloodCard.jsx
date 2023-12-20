import React, { useState } from 'react';

const DonateBloodCard = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const [isOpen1, setIsOpen1] = useState(false);

    const checkboxOptions = [
      'A+',
      'B+',
      'AB+',
      'O+',
      'A-',
      'B-',
      'AB-',
      'O-',
    ];

    const checkboxOptions1 = [
        'A+',
        'B+',
        'AB+',
        'O+',
        'A-',
        'B-',
        'AB-',
        'O-',
      ];
  
    const handleButtonClick = () => {
      setIsOpen(!isOpen);
    };
    const handleButtonClick1 = () => {
      setIsOpen1(!isOpen1);
    };
  
  return (
    

<div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   
   
<div className="flex flex-col items-start">
      <button
        className="bg-[#E11B22] text-white px-4 py-2 rounded mb-4 w-full text-left"
        onClick={handleButtonClick}
      >
        {isOpen ? 'Not Now' : 'Donate Blood'}
      </button>
      {isOpen && (
        <div className="grid grid-cols-4 gap-4">
          {checkboxOptions.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-red-500 h-5 w-5 mr-2"
                id={`checkbox-${index}`}
                onChange={() => {}}
              />
              <label htmlFor={`checkbox-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>

    <div className="flex flex-col items-start mt-3">
      <button
        className="bg-[#E11B22] text-white px-4 py-2 rounded mb-4 w-full text-left"
        onClick={handleButtonClick1}
      >
        {isOpen1 ? 'Not Now' : 'Donate Plasma'}
      </button>
      {isOpen1 && (
        <div className="grid grid-cols-4 gap-4">
          {checkboxOptions1.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-red-500 h-5 w-5 mr-2"
                id={`checkbox-${index}`}
                onChange={() => {}}
              />
              <label htmlFor={`checkbox-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
</div>

  );
};

export default DonateBloodCard;