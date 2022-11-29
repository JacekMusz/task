import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StoreDataStatus, Transaction, TransactionDTO } from "../../../types";
import service from "../../../api/transaction";
import { API_PATHS } from "../../../api/constans";

const sliceName = "transactions";

export interface TransactionsState {
  transactions: TransactionDTO[];
  displayedTransactions: TransactionDTO[];
  loading: StoreDataStatus;
}

const initialState: TransactionsState = {
  transactions: [],
  displayedTransactions: [],
  loading: StoreDataStatus.IDLE,
};

export const fetchAllTransactions = createAsyncThunk(
  `${sliceName}/fetchAllTransactions`,
  async () => {
    const response = await service.getAll;
    return response.data;
  }
);

export const deleteTransaction = createAsyncThunk(
  `${sliceName}/deleteTransaction`,
  async (id: number) => {
    const response = await service.delete(id);
    // COMMENT: TEMPORARY SOLUTION BECAUSE JSON-SERVER DO NOT SEND ID OF DELETED ITEM
    return response.config?.url?.replace(`${API_PATHS.TRANSACTIONS}/`, "");
  }
);

export const createTransaction = createAsyncThunk(
  `${sliceName}/createTransation`,
  async (transaction: Transaction) => {
    const response = await service.create(transaction);
    return response.data;
  }
);

export const transactionSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    findTransactionsBy: (state, action) => {
      return {
        ...state,
        displayedTransactions: [
          ...state.transactions.filter((transaction) =>
            transaction.beneficiary.includes(action.payload)
          ),
        ],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTransactions.fulfilled, (state, action) => {
      state.transactions = [...action.payload];
      state.displayedTransactions = [...action.payload];
      state.loading = StoreDataStatus.SUCCEEDED;
    });
    builder.addCase(fetchAllTransactions.pending, (state) => {
      state.loading = StoreDataStatus.PENDIG;
    });
    builder.addCase(fetchAllTransactions.rejected, (state) => {
      state.loading = StoreDataStatus.FAILED;
    });
    builder.addCase(deleteTransaction.fulfilled, (state, action) => {
      let index = state.transactions.findIndex(
        ({ id }) => id.toString() === action.payload
      );
      state.transactions.splice(index, 1);
      state.displayedTransactions.splice(index, 1);
    });
    builder.addCase(createTransaction.fulfilled, (state, action) => {
      state.transactions.push(action.payload);
      state.displayedTransactions.push(action.payload);
      //COMMENT: BETER SOLUTION WOULD BE CREATE A MODAL FOR HANDLING THIS MESSAGE
      alert("record added properly");
    });
    builder.addCase(createTransaction.rejected, () => {
      //COMMENT: BETER SOLUTION WOULD BE CREATE A MODAL FOR HANDLING THIS MESSAGE
      alert("something gone wrong, try it again");
    });
  },
});

export const { findTransactionsBy } = transactionSlice.actions;

export default transactionSlice.reducer;
