import React, { InputHTMLAttributes } from "react";
import { FormInputs, FormInputsLabels } from "../../types";

import "./baseInput.scss";

type BaseInputProps = {
  formInput: FormInputs;
  label: FormInputsLabels;
  handleUpdateForm: (
    e: React.FormEvent<HTMLInputElement>,
    formInput: FormInputs
  ) => void;
};

const BaseFormInput: React.FC<
  InputHTMLAttributes<HTMLInputElement> & BaseInputProps
> = ({ label, handleUpdateForm, formInput, ...rest }) => {
  return (
    <div className={"base-form-input"}>
      <label>
        {`${label}:`}
        <input {...rest} onChange={(e) => handleUpdateForm(e, formInput)} />
      </label>
    </div>
  );
};

export default React.memo(BaseFormInput);
