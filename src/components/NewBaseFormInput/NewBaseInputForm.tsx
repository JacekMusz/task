import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import "./newBaseInputForm.scss";

type NewBaseInputProps = {
  label: string;
  placeholder: string;
  register: any;
  errorMessage: string | undefined;
  type: HTMLInputTypeAttribute;
};

const NewBaseInputForm: React.FC<
  InputHTMLAttributes<HTMLInputElement> & NewBaseInputProps
> = ({ label, type, errorMessage, register }) => {
  return (
    <div className="form-group">
      <div>
        <label>{label}</label>
        <input
          type={type}
          {...register}
          className={`form-control ${errorMessage ? "is-invalid" : ""}`}
        />
      </div>
      <div className="invalid-feedback">{errorMessage}</div>
    </div>
  );
};

export default NewBaseInputForm;
