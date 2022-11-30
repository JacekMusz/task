import React, { InputHTMLAttributes } from "react";
import { InputFieldType } from "../../hooks/useNewTransactionForm2";

type Props = {
  label: string;
  name: string;
  onChange: (e: React.FormEvent<HTMLInputElement>, name: string) => void;
  type: InputFieldType;
  attrs?: InputHTMLAttributes<HTMLInputElement>;
};

export const Input = ({ label, name, onChange, type, attrs }: Props) => {
  return (
    <div>
      <label>{label}</label>
      <input onChange={(e) => onChange(e, name)} type={type} {...attrs} />
    </div>
  );
};
