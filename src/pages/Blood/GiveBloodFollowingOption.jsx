import React, { useEffect } from 'react';
import { useState } from 'react';
import BloodBankCard from './BloodBankCard';
import HospitalCard from './HospitalCard';
import PatientsCard from './PatientsCard';
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
// import rooturl from '../../utils/urls';


const GiveBloodFollowingOption = () => {

  const [isshow, setisshow] = useState(false)

  const [isshowHospital, setisshowHospital] = useState(false)

  const [isshowPatients, setisshowPatients] = useState(false)



  const [bloodBank, setBloodBank] = useState([])

  useEffect(() => {
    fetch('/BloodBank.json')
      .then(res => res.json())
      .then(data => setBloodBank(data))
  }, [])

  const [hospital, setHospital] = useState([])



  useEffect(() => {

    axios.get(`https://bloodbackend.visionarytechsolution.com/home/hospitals`)
      .then(res =>
        setHospital(res.data)
      )
      .catch(err => console.log(err))

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
          isshow ? bloodBank.map(blood => <BloodBankCard key={blood.id} blood={blood}></BloodBankCard>) :

            bloodBank.slice(0, 4).map(blood => <BloodBankCard key={blood.id} blood={blood}></BloodBankCard>)
        }



      </div>
      {bloodBank.length > 4 && <button onClick={() => setisshow(!isshow)} className='flex items-center gap-3 text-lg text-[#E11B22] ml-auto mt-4 '>{isshow ? "Show less" : "see more"} <GoArrowRight /></button>}

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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
        {
          isshowHospital ? hospital.map(ahospital => <HospitalCard key={ahospital.id} ahospital={ahospital}></HospitalCard>) :
            hospital.slice(0, 3).map(ahospital => <HospitalCard key={ahospital.id} ahospital={ahospital}></HospitalCard>)
        }
      </div>
      {bloodBank.length > 3 && <button onClick={() => setisshowHospital(!isshowHospital)} className='flex items-center gap-3 text-lg text-[#E11B22] ml-auto mt-4 '>{isshowHospital ? "Show less" : "see more"} <GoArrowRight /></button>}

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
          isshowPatients ? Patients.map(patient => <PatientsCard key={patient.id} patient={patient}></PatientsCard>) :
            Patients.slice(0, 4).map(patient => <PatientsCard key={patient.id} patient={patient}></PatientsCard>)
        }
      </div>
      {bloodBank.length > 3 && <button onClick={() => setisshowPatients(!isshowPatients)} className='flex items-center gap-3 text-lg text-[#E11B22] ml-auto mt-4 '>{isshowPatients ? "Show less" : "see more"} <GoArrowRight /></button>}
    </div>
  );
};

export default GiveBloodFollowingOption;