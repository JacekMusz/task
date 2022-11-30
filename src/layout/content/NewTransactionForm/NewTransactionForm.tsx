import { useDispatch } from "react-redux";
import { createTransaction } from "../../../store/features/transactions";
import { AppDispatch } from "../../../store/store";
import { FormInputsLabels, Transaction } from "../../../types";
import "./newTransactionForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import NewBaseInputForm from "../../../components/NewBaseFormInput/NewBaseInputForm";

type UserSubmitForm = {
  beneficiary: string;
  amount: number;
  account: string;
  address: string;
  description: string;
};

const validationSchema = Yup.object().shape({
  beneficiary: Yup.string().required("beneficiary is required"),
  amount: Yup.number()
    .positive("amount must be positive")
    .required("amount is required"),
  account: Yup.string().required("account is required"),
  address: Yup.string().required("address is required"),
  description: Yup.string().required("description is required"),
});

const NewTransactionForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const handleSendForm = (data: Omit<Transaction, "date">) => {
    dispatch(
      createTransaction({
        ...data,
        date: new Date().toString(),
      })
    );
  };
  const onSubmit = (data: UserSubmitForm) => {
    handleSendForm(data);
  };

  return (
    <div className="transaction-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <NewBaseInputForm
          placeholder={"type here..."}
          label={FormInputsLabels.BENEFICIARY}
          register={register("beneficiary")}
          type={"string"}
          errorMessage={errors.beneficiary?.message}
        />
        <NewBaseInputForm
          placeholder={"type here..."}
          label={FormInputsLabels.ACCOUNT_NUMBER}
          register={register("account")}
          type={"string"}
          errorMessage={errors.account?.message}
        />
        <NewBaseInputForm
          placeholder={"type here..."}
          label={FormInputsLabels.AMOUNT}
          register={register("amount")}
          type={"number"}
          errorMessage={errors.amount?.message}
        />
        <NewBaseInputForm
          placeholder={"type here..."}
          label={FormInputsLabels.ADDRESS}
          register={register("address")}
          type={"string"}
          errorMessage={errors.address?.message}
        />
        <NewBaseInputForm
          placeholder={"type here..."}
          label={FormInputsLabels.DESCRIPTION}
          register={register("description")}
          type={"string"}
          errorMessage={errors.beneficiary?.message}
        />
        <button type="reset" onClick={() => reset()} className="btn">
          reset
        </button>
        <button type="submit" className="btn">
          send
        </button>
      </form>
    </div>
  );
};

export default NewTransactionForm;
