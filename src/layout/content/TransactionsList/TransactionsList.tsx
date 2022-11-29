import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTransactions } from "../../../store/features/transactions";
import { AppDispatch, RootState } from "../../../store/store";
import ListItem from "./ListItem";

import "./transactions.scss";

const TransactionsList = () => {
  const { transactions: transactionState } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    transactionState.loading === "idle" && dispatch(fetchAllTransactions());
  }, []);

  return (
    <div className="transactions-list">
      {transactionState.loading === "pending" && <div>data is fetching...</div>}
      {transactionState.loading === "failed" && <div>something gone wrong</div>}
      {transactionState.loading === "succeeded" && (
        <ul>
          {transactionState.transactions.map((transaction) => {
            return <ListItem key={transaction.id} {...transaction} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default TransactionsList;
