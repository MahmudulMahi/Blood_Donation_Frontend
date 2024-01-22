import React from 'react';
import hospitalimg from '../../assets/image 51.png'

const HospitalCard = ({ahospital}) => {
  const {name,location,image}=ahospital
  return (
    <div className='text-center'>
      <img src={hospitalimg} alt="" />
      <p>{name}</p>
      <p>{location}</p>
      
    </div>
  );
};

export default HospitalCard;