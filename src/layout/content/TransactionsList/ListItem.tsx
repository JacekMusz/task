import React from "react";
import { TransactionDTO } from "../../../types";

const ListItem: React.FC<TransactionDTO> = ({
  id,
  amount,
  beneficiary,
  account,
  address,
  date,
  description,
}) => {
  return (
    <li className="list-item">
      <div className="amount">{amount}</div>
      <div className="beneficiary">{beneficiary}</div>
      <div className="account">{account}</div>
      <div className="date">{address}</div>
      <div className="address">{date}</div>
      <div className="description">{description}</div>
      <div className="remove">
        <button onClick={() => {}}>remove</button>
      </div>
    </li>
  );
};

export default ListItem;
