import * as React from "react";

interface IInputFieldProps {
  id: string;
  name?: string;
  className?: string;
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const InputField = (props: IInputFieldProps) => {
  return (
    <input
      id={props.id}
      name={props.name}
      className={props.className}
      type={props.type}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
