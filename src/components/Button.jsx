import React from 'react'

const Button = ({type, label}) => {
    const baseStyles = 'text-white border rounded-full py-3 md:py-4 px-10 hover:bg-gray-500 transition duration-300 ease-in-out cursor-pointer bg-body text-xs sm:text-base';
    const primaryStyles = 'border-outline1';
    const secondaryStyles = 'border-outline2 shadow-1';

    const buttonStyles = type === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button className={`${baseStyles} ${buttonStyles}`}>
        {label}
    </button>
  )
}

export default Button