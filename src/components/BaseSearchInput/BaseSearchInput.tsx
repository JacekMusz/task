import React from "react";
import { InputHTMLAttributes } from "react";

type BaseInputProps = {
  label: string;
  placeholder: string;
  handleOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

const BaseFormInput: React.FC<
  InputHTMLAttributes<HTMLInputElement> & BaseInputProps
> = ({ label, handleOnChange, placeholder, ...rest }) => {
  return (
    <div className={"base-search-input"}>
      <label>
        {`${label}:`}
        <input {...rest} onChange={(e) => handleOnChange(e)} placeholder={""} />
      </label>
    </div>
  );
};

export default React.memo(BaseFormInput);
