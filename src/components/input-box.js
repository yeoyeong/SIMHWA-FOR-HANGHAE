import React from "react";

const InputBox = ({ title, value, placeholder, onChange }) => {
  return (
    <>
      <span>{title}</span>
      <input value={value} placeholder={placeholder} onChange={onChange} />
    </>
  );
};

export default InputBox;
