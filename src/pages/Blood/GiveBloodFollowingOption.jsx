import React, { useEffect } from 'react';
import { useState } from 'react';
import BloodBankCard from './BloodBankCard';
import HospitalCard from './HospitalCard';
import PatientsCard from './PatientsCard';
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const GiveBloodFollowingOption = () => {

  const [bloodBank, setBloodBank] = useState([])

  useEffect(() => {
    fetch('/BloodBank.json')
      .then(res => res.json())
      .then(data => setBloodBank(data))
  }, [])

  const [hospital, setHospital] = useState([])

  useEffect(() => {
    fetch('/Hospital.json')
      .then(res => res.json())
      .then(data => setHospital(data))
  }, [])

  const [Patients, setPatients] = useState([])

  useEffect(() => {
    fetch('/Patients.json')
      .then(res => res.json())
      .then(data => setPatients(data))
  }, [])
  return (
    <div>


      <button type="button" className=" mt-3 bg-gray-50 border border-gray-300 text-red-700  rounded-lg   block w-full p-2.5    dark:text-white   text-lg font-bold text-left">
        <div className='flex '>
          <div>
            Blood Bank
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl text-black'>
            <IoIosArrowDown />
          </div>
        </div>
      </button>
      <div className='grid grid-cols-2 md:grid-cols-4 mt-3'>
        {
          bloodBank.map(blood => <BloodBankCard key={blood.id} blood={blood}></BloodBankCard>)
        }



      </div>
      <button className='flex items-center gap-3 text-lg text-[#E11B22] ml-auto mt-4 '>see more <GoArrowRight /></button>

      <button type="button" className=" mt-3 bg-gray-50 border border-gray-300 text-red-700  rounded-lg   block w-full p-2.5    dark:text-white   text-lg font-bold text-left">
        <div className='flex '>
          <div>
          Hospital
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl text-black'>
            <IoIosArrowDown />
          </div>
        </div>
      </button>

      <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
        {
          hospital.map(ahospital => <HospitalCard key={ahospital.id} ahospital={ahospital}></HospitalCard>)
        }
      </div>
      <button className='flex items-center gap-3 text-lg text-[#E11B22] ml-auto mt-4 '>see more <GoArrowRight /></button>

      <button type="button" className=" mt-3 bg-gray-50 border border-gray-300 text-red-700  rounded-lg   block w-full p-2.5    dark:text-white   text-lg font-bold text-left">
        <div className='flex '>
          <div>
          Patients
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl text-black'>
            <IoIosArrowDown />
          </div>
        </div>
      </button>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        {
          Patients.map(patient => <PatientsCard key={patient.id} patient={patient}></PatientsCard>)
        }
      </div>
      <button className='flex items-center gap-3 text-lg text-[#E11B22] ml-auto mt-4 '>see more <GoArrowRight /></button>
    </div>
  );
};

export default GiveBloodFollowingOption;