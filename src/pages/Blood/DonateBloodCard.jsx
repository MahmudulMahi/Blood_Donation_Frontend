import React, { useState } from 'react';
import ideaicon from "../../assets/icons/ion_information-circle.png"
import ideaicon2 from "../../assets/icons/Vector.png"
import detailsicon from "../../assets/Polygon 1 (1).png"
import arrowicon from "../../assets/icons/ion_caret-down-outline.png"
import { AiOutlineCaretDown } from "react-icons/ai";

const DonateBloodCard = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [bgandtext, setBgandText] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const [isOpen1, setIsOpen1] = useState(false);
    const [showButtons1, setShowButtons1] = useState(false);
    const [bgandtext1, setBgandText1] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    

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
  
    const toggleButtons = () => {
      setShowButtons(!showButtons);
    };
    const toggleButtons1 = () => {
      setShowButtons1(!showButtons1);
    };

    const bdandTextToggle=()=>{
      setBgandText(!bgandtext)
    }
    const bdandTextToggle1=()=>{
      setBgandText1(!bgandtext1)
    }

    const handleClick = () => {
      handleButtonClick();
      toggleButtons();
      bdandTextToggle();
    };
    const handleClick1 = () => {
      handleButtonClick1();
      toggleButtons1();
      bdandTextToggle1();
    };
  return (
    

<div className="w-full border  rounded-lg shadow sm:p-8 ">
   
{/* dark:bg-gray-800 dark:border-gray-700 border-gray-200 */}
<div className="flex flex-col items-start">
   
   
   <button
      onClick={handleClick}
      className={`${(bgandtext === true) ? 'bg-[#E11B22] text-white' : 'bg-white text-black'} border-2  px-4 py-2 rounded mb-4 w-full text-left btn text-black `}
     
    >
      
     <div className='flex items-center'>
     {
     showButtons ? <button className='mr-3'  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><img src={ideaicon} alt="" /></button>
   
     :<button className='mr-3' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><img src={ideaicon2} alt="" /></button>
     
     }
  
 
      {isOpen ? 'Donate Blood' :'Donate Blood'}
      <div className='ml-auto' >
        {
         showButtons ? <img src={arrowicon} alt="" />:
        <AiOutlineCaretDown />
         }
         </div>
     </div>
    </button>

    {isHovered && (
  <div className="absolute w-[300px]  h-[100px] left-[395px] top-[620px] mt-2 p-4 bg-[#E11B22] shadow-md rounded-md">
    {/* bg-[#E11B22] */}
    <div className=' absolute -left-[33px]'>
    <img src={detailsicon} alt="" />
    </div>
    mahi mahi   dfghjklasdfghjkl;
  </div>
)}

  
      {isOpen && (
    <div className="grid grid-cols-4 gap-3  ">
    {checkboxOptions.map((option, index) => (
      <div key={index} className="flex items-center justify-center">
        <input
          type="checkbox"
          className="form-checkbox text-red-500 focus:ring-2 focus:ring-red-500 mr-[4px] "
          id={`checkbox-${index}`}
          onChange={() => {}}
        />
        <label htmlFor={`checkbox-${index}`}>{option}</label>
      </div>
    ))}
  </div>
      )}
    </div>

    <div className="flex flex-col items-start">
   
   
   <button
      onClick={handleClick1}
      className={`${(bgandtext1 === true) ? 'bg-[#E11B22] text-white' : 'bg-white text-black'} border-2  px-4 py-2 rounded mb-4 w-full text-left btn text-black mt-5`}
      
    >
      
     <div className='flex items-center'>
     {
     showButtons1 ? <button className='mr-3' onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}><img src={ideaicon} alt="" /></button>:
     <button className='mr-3' onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}><img src={ideaicon2} alt="" /></button>
     }
      
      {isOpen ? 'Donate Plasma' :'Donate Plasma'}
      <div className='ml-auto' >
        {
         showButtons1 ? <img src={arrowicon} alt="" />:
        <AiOutlineCaretDown />
         }
         </div>
         
     </div>
    </button>
    
    {isHovered1 && (
  <div className="absolute w-[300px] h-[100px] left-[395px] top-[750px] mt-2 p-4 bg-[#E11B22] shadow-md rounded-md">
     <div className=' absolute -left-[33px]'>
    <img src={detailsicon} alt="" />
    </div>
    mahi mahi   dfghj;
  </div>
)}
      {isOpen1 && (
        <div className="grid grid-cols-4 gap-3 ">
          {checkboxOptions1.map((option, index) => (
            <div key={index} className="flex items-center justify-center ">
              <input
                type="checkbox"
                className="form-checkbox text-red-500 focus:ring-2 focus:ring-red-500 mr-[5px] "
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
