import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import BaseFormInput from "../../../components/BaseFormInput";
import useNewTransactionForm from "../../../hooks/useNewTransactionForm";
import { createTransaction } from "../../../store/features/transactions";
import { AppDispatch } from "../../../store/store";
import { FormInputs, FormInputsLabels, Transaction } from "../../../types";
import "./newTransactionForm.scss";

const NewTransactionForm = () => {
  const { formState, handleUpdateForm } = useNewTransactionForm();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValuesNullish = !Object.keys(formState).some(
      (key) => formState[key as FormInputs].value === null
    );

    if (isValuesNullish) {
      dispatch(
        createTransaction({
          amount: formState.amount.value,
          beneficiary: formState.beneficiary.value,
          account: formState.account_number.value,
          address: formState.address.value,
          date: new Date(),
          description: formState.description.value,
        } as unknown as Transaction)
      );
    }
  };

  return (
    <div className="transaction-form">
      <form onSubmit={handleSubmitForm}>
        <BaseFormInput
          required
          label={FormInputsLabels.BENEFICIARY as FormInputsLabels}
          formInput={FormInputs.BENEFICIARY}
          handleUpdateForm={handleUpdateForm}
        />
        <BaseFormInput
          required
          label={FormInputsLabels.AMOUNT}
          formInput={FormInputs.AMOUNT}
          min={0}
          type="number"
          handleUpdateForm={handleUpdateForm}
        />
        <BaseFormInput
          required
          label={FormInputsLabels.ACCOUNT_NUMBER}
          formInput={FormInputs.ACCOUNT_NUMBER}
          type="number"
          handleUpdateForm={handleUpdateForm}
        />
        <BaseFormInput
          required
          label={FormInputsLabels.ADDRESS}
          formInput={FormInputs.ADDRESS}
          handleUpdateForm={handleUpdateForm}
        />
        <BaseFormInput
          required
          label={FormInputsLabels.DESCRIPTION}
          formInput={FormInputs.DESCRIPTION}
          handleUpdateForm={handleUpdateForm}
        />
        <button type="submit">Send New Transaction</button>
      </form>
    </div>
  );
};

export default NewTransactionForm;
