import React from 'react';

const HospitalCard = ({ahospital}) => {
  const {image}=ahospital
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default HospitalCard;