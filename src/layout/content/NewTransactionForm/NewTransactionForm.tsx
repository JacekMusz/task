import { FormEvent } from "react";
import BaseInput from "../../../components/BaseInput";
import useNewTransactionForm from "../../../hooks/useNewTransactionForm";
import { FormInputs, FormInputsLabels } from "../../../types";
import "./newTransactionForm.scss";

const NewTransactionForm = () => {
  const { formState, handleUpdateForm } = useNewTransactionForm();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="transaction-form">
      <form onSubmit={handleSubmitForm}>
        <BaseInput
          required
          label={FormInputsLabels.AMOUNT}
          formInput={FormInputs.AMOUNT}
          min={0}
          type="number"
          handleUpdateForm={handleUpdateForm}
        />
        <BaseInput
          required
          label={FormInputsLabels.ACCOUNT_NUMBER}
          formInput={FormInputs.ACCOUNT_NUMBER}
          type="number"
          handleUpdateForm={handleUpdateForm}
        />
        <BaseInput
          required
          label={FormInputsLabels.ADDRESS}
          formInput={FormInputs.ADDRESS}
          min={0}
          handleUpdateForm={handleUpdateForm}
        />
        <BaseInput
          required
          label={FormInputsLabels.DESCRIPTION}
          formInput={FormInputs.DESCRIPTION}
          min={0}
          handleUpdateForm={handleUpdateForm}
        />
        <button type="submit">Send New Transaction</button>
      </form>
    </div>
  );
};

export default NewTransactionForm;
