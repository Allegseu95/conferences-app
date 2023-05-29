import React from 'react';

export const CheckBox = ({ label = '', id = '', checked, onChange = () => {} }) => {
  const handleCheckboxChange = () => {
    onChange(id, !checked);
  };

  return (
    <div className='form-check p-1 d-flex align-items-center'>
      <input
        className='form-check-input me-2'
        type='checkbox'
        checked={checked}
        id={id}
        onChange={handleCheckboxChange}
      />
      {label !== '' && (
        <label className='form-check-label text-light' htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
