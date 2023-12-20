import React, { useEffect } from 'react';
import { useState } from 'react';
import BloodBankCard from './BloodBankCard';
import HospitalCard from './HospitalCard';
import PatientsCard from './PatientsCard';

const GiveBloodFollowingOption = () => {

  const [bloodBank, setBloodBank]=useState([])

  useEffect(()=>{
    fetch('/BloodBank.json')
    .then(res=>res.json())
    .then(data=>setBloodBank(data))
  },[])

  const [hospital, setHospital]=useState([])

  useEffect(()=>{
    fetch('/Hospital.json')
    .then(res=>res.json())
    .then(data=>setHospital(data))
  },[])

  const [Patients, setPatients]=useState([])

  useEffect(()=>{
    fetch('/Patients.json')
    .then(res=>res.json())
    .then(data=>setPatients(data))
  },[])
  return (
    <div>

      
      <select id="countries" className=" mt-3 bg-gray-50 border border-gray-300 text-red-700  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg font-bold">
        <option selected className='text-[#E11B22]'>Blood Bank</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
     <div className='grid grid-cols-2 md:grid-cols-4 mt-3'>
     {
        bloodBank.map(blood=><BloodBankCard key={blood.id} blood={blood}></BloodBankCard>)
      }
     </div>

     <select id="countries" className=" mt-3 bg-gray-50 border border-gray-300 text-red-700  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg font-bold">
        <option selected className='text-[#E11B22]'>Hospital</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

      <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
        {
          hospital.map(ahospital =><HospitalCard key={ahospital.id} ahospital={ahospital}></HospitalCard>)
        }
      </div>

      <select id="countries" className=" mt-3 bg-gray-50 border border-gray-300 text-red-700  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg font-bold">
        <option selected className='text-[#E11B22]'>Patients</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          {
            Patients.map(patient=><PatientsCard key={patient.id} patient={patient}></PatientsCard>)
          }
        </div>
    </div>
  );
};

export default GiveBloodFollowingOption;