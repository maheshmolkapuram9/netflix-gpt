import React from "react";

const InputElement = ({ ref, type, autoComplete, placeholder, className }) => {
  return (
    <input
      ref={ref}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={
        "p-4 bg-gray-400/30 block  w-full border rounded-md border-white" +
        className
      }
    />
  );
};

export default InputElement;
