import { METHODS, Transaction, TransactionDTO } from "../../types";
import { API_PATHS } from "../constans";
import http from "../http-common";

const service = {
  [METHODS.GET_ALL]: http.get<TransactionDTO[]>(API_PATHS.TRANSACTIONS),
  [METHODS.DELETE]: (id: TransactionDTO["id"]) =>
    http.delete(`${API_PATHS.TRANSACTIONS}/${id}`),
  [METHODS.CREATE]: (transition: Transaction) =>
    http.post(API_PATHS.TRANSACTIONS, { ...transition }),
};

export default service;
