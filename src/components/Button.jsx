import React, { useState } from 'react';

export const Button = ({
  title = 'Click',
  background = '#1e88e5 !important',
  type = 'button',
  disabled = false,
  textColor = '#fff',
  onClick = () => {},
  mt,
}) => {
  return (
    <div className={`d-flex justify-content-center ${mt}`}>
      <button
        type={type}
        className={`btn btn-primary rounded rounded-3 px-4 py-2`}
        style={{
          backgroundColor: disabled ? 'gray' : background,
          color: textColor,
        }}
        disabled={disabled}
        onClick={() => onClick()}>
        {title}
      </button>
    </div>
  );
};
