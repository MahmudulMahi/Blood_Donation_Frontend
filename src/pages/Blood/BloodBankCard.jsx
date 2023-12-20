import React from 'react';

const BloodBankCard = ({blood}) => {

  const {image}=blood
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default BloodBankCard;