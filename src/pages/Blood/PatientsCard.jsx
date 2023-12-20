import React from 'react';

const PatientsCard = ({ patient }) => {
  const { image, name, bloodGroup, age, hospital, dateNeeded, contact } = patient;
  
  return (
 <div className='mr-5'>
     <div 
     className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5 " >
  
      
   <div className='flex flex-col space-y-9 p-6'>
   <img className=" w-[100px] rounded-full h-[100px] " src={image} alt="" />
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Donate</button>
   </div>
      
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Blood: <span className='text-red-600'>{bloodGroup}</span></p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Age:{age}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hospital:<span className='font-bold'>{hospital}</span></p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Date Needed:{dateNeeded}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Contact:{contact}</p>
      </div>
      </div> 
 </div>

  );
};

export default PatientsCard;
