import React from "react";
import { TransactionDTO } from "../../../types";

interface ListItemProps extends TransactionDTO {
  handleRemoveTransaction: (id: TransactionDTO["id"]) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  amount,
  beneficiary,
  account,
  address,
  date,
  description,
  handleRemoveTransaction,
}) => {
  return (
    <li className="list-item">
      <div className="amount list-item__cell">{amount}</div>
      <div className="beneficiary list-item__cell">{beneficiary}</div>
      <div className="account list-item__cell">{account}</div>
      <div className="date list-item__cell">{address}</div>
      <div className="address list-item__cell">{date}</div>
      <div className="description list-item__cell">{description}</div>
      <div className="remove list-item__cell">
        <button onClick={() => handleRemoveTransaction(id)}>remove</button>
      </div>
    </li>
  );
};

export default ListItem;
