import { METHODS, TransactionDTO } from "../../types";
import { API_PATHS } from "../constans";
import http from "../http-common";

const service = {
  [METHODS.GET_ALL]: http.get<TransactionDTO[]>(API_PATHS.TRANSACTIONS),
};

export default service;
