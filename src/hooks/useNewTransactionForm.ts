import { useState } from "react";
import { FormInputs, FormInputsLabels } from "../types";

export const initFormState = {
  [FormInputs.AMOUNT]: {
    value: null,
    label: FormInputsLabels.AMOUNT,
    formInput: FormInputs.AMOUNT,
  },
  [FormInputs.ACCOUNT_NUMBER]: {
    value: null,
    label: FormInputsLabels.ACCOUNT_NUMBER,
    formInput: FormInputs.ACCOUNT_NUMBER,
  },
  [FormInputs.ADDRESS]: {
    value: null,
    label: FormInputsLabels.ADDRESS,
    formInput: FormInputs.ADDRESS,
  },
  [FormInputs.DESCRIPTION]: {
    value: null,
    label: FormInputsLabels.DESCRIPTION,
    formInput: FormInputs.DESCRIPTION,
  },
  [FormInputs.BENEFICIARY]: {
    value: null,
    label: FormInputsLabels.BENEFICIARY,
    formInput: FormInputs.BENEFICIARY,
  },
};

export type FormStateType = {
  [key in FormInputs]: {
    value: null | (key extends FormInputs.ACCOUNT_NUMBER ? number : string);
    label: FormInputsLabels;
    formInput: FormInputs;
  };
};

const useNewTransactionForm = () => {
  const [formState, setFormState] = useState<FormStateType>(initFormState);

  const handleUpdateForm = (
    e: React.FormEvent<HTMLInputElement>,
    formInput: FormInputs
  ) => {
    let updatedFormState = formState;
    formState[formInput].value = e.currentTarget.value;
    setFormState(updatedFormState);
  };

  return {
    formState,
    handleUpdateForm,
  };
};

export default useNewTransactionForm;
