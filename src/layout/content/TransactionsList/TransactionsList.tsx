import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTransaction,
  fetchAllTransactions,
} from "../../../store/features/transactions";
import { AppDispatch, RootState } from "../../../store/store";
import { StoreDataStatus, TransactionDTO } from "../../../types";
import ListItem from "./ListItem";

import "./transactions.scss";

const TransactionsList = () => {
  const [displayedList, setDisplayedList] = useState<TransactionDTO[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const { transactions: transactionState } = useSelector(
    (state: RootState) => state
  );

  const handleRemoveTransaction = (id: TransactionDTO["id"]) => {
    try {
      dispatch(deleteTransaction(id));
    } catch (err) {
      alert("something gone wrong");
    }
  };

  useEffect(() => {
    transactionState.loading === StoreDataStatus.IDLE &&
      dispatch(fetchAllTransactions());

    setDisplayedList(transactionState.displayedTransactions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionState]);

  return (
    <div className="transactions-list">
      {transactionState.loading === StoreDataStatus.IDLE && (
        <div>data is fetching...</div>
      )}
      {transactionState.loading === StoreDataStatus.FAILED && (
        <div>something gone wrong</div>
      )}
      {transactionState.loading === StoreDataStatus.SUCCEEDED && (
        <>
          {displayedList.length > 0 ? (
            <ul>
              {displayedList.map((transaction) => {
                return (
                  <ListItem
                    key={transaction.id}
                    {...transaction}
                    handleRemoveTransaction={handleRemoveTransaction}
                  />
                );
              })}
            </ul>
          ) : (
            <div>no transactions to display</div>
          )}
        </>
      )}
    </div>
  );
};

export default TransactionsList;
