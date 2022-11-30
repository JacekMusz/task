import { FormEvent } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../store/store";
import { FormInputs, FormInputsLabels } from "../../../types";
import { Input } from "../../../components/BaseFormInput2/BaseFormInput2";
import "./newTransactionForm.scss";

import {
  FieldData,
  useNewTransactionForm2,
} from "../../../hooks/useNewTransactionForm2";

const NewTransactionForm = () => {
  const { formState2, handleUpdateForm2 } =
    useNewTransactionForm2(formFieldsConfig);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState2);
  };

  return (
    <div className="transaction-form">
      <form onSubmit={handleSubmitForm}>
        {formFieldsConfig.map((field) => {
          return (
            <Input
              key={field.name}
              name={field.name}
              label={field.label}
              onChange={handleUpdateForm2}
              type={field.type}
            />
          );
        })}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default NewTransactionForm;

const formFieldsConfig: FieldData[] = [
  {
    name: FormInputs.BENEFICIARY,
    type: "text",
    label: FormInputsLabels.BENEFICIARY,
  },
  {
    name: FormInputs.ACCOUNT_NUMBER,
    type: "text",
    label: FormInputsLabels.ACCOUNT_NUMBER,
  },
  {
    name: FormInputs.AMOUNT,
    type: "number",
    label: FormInputsLabels.AMOUNT,
    attrs: { min: 0 },
  },
  {
    name: FormInputs.DESCRIPTION,
    type: "text",
    label: FormInputsLabels.DESCRIPTION,
  },
];
