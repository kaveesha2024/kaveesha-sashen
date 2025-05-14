import React, { type ChangeEvent } from "react";

interface IInputFieldProp {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC <IInputFieldProp> = ({ name, placeholder, type, handleInput, value }) => {
  return (
    <input
      className=" outline-none border-2 border-[#AA00FF] w-[80%] p-3 rounded-md font-semibold glow-hover transition duration-300"
      type={type}
      name={name}
      onChange={handleInput}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default InputField;