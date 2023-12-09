import React from 'react';

const DynamicLabel = ({ label, isRequired }) => {
  return (
    <div className="w-auto">
      <p className="font-semibold">
        {label} {isRequired && <sup className="text-brandPrimary">*</sup>}
      </p>
    </div>
  );
};

export default DynamicLabel;
