import React from "react";

const RedButton = ({ className, onClick, buttonText }) => {
  return (
    <button
      className={"bg-red-600 w-full p-3 rounded-md " + className}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default RedButton;
