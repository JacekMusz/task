import { useDispatch } from "react-redux";
import BaseSearchInput from "../../../components/BaseSearchInput";
import { findTransactionsBy } from "../../../store/features/transactions";

import { AppDispatch } from "../../../store/store";
import "./filters.scss";

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(findTransactionsBy(e.currentTarget.value));
  };

  return (
    <div className="filters">
      <div className="balance">
        <button>balance</button>
      </div>
      <div className="filter">
        <BaseSearchInput
          label={"search by beneficiary"}
          placeholder={"type here..."}
          handleOnChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Filters;
