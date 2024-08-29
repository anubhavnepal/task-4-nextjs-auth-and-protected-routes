import React from "react";

const Input = ({ id, type, name, placeholder, onChange, value }: InputParams) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:shadow-md focus:shadow-indigo-200 p-3 bg-[#EFEFEF] rounded-lg w-full mb-4"
      value={value}
      onChange={onChange}  
    />
  );
};

export default Input;
