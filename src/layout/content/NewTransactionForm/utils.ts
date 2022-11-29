import { FormStateType } from "../../../hooks/useNewTransactionForm";
import { FormInputs } from "../../../types";

export const isValuesNullish = (formState: FormStateType) => {
  return Object.keys(formState).some(
    (key) => formState[key as FormInputs].value === null
  );
};
