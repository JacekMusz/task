export enum FormInputsLabels {
  AMOUNT = "Amount",
  ACCOUNT_NUMBER = "Account number",
  ADDRESS = "Address",
  DESCRIPTION = "Description",
}

export enum FormInputs {
  AMOUNT = "amount",
  ACCOUNT_NUMBER = "account_number",
  ADDRESS = "address",
  DESCRIPTION = "description",
}

export interface Transaction {
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
}

export interface TransactionDTO extends Transaction {
  id: number;
}

export enum METHODS {
  GET_ONE = "getOne",
  GET_ALL = "getAll",
  CREATE = "create",
  DELETE = "delete",
  UPDATE = "update",
}
