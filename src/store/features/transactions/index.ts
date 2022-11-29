import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TransactionDTO } from "../../../types";
import service from "../../../api/transaction";

const sliceName = "transactions";

export interface TransactionsState {
  transactions: TransactionDTO[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: TransactionsState = {
  transactions: [],
  loading: "idle",
};

export const fetchAllTransactions = createAsyncThunk(
  `${sliceName}/fetchAllTransactions`,
  async () => {
    const response = await service.getAll;
    return response.data;
  }
);

export const transactionSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    filter: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTransactions.fulfilled, (state, action) => {
      state.transactions = [...action.payload];
      state.loading = "succeeded";
    });
    builder.addCase(fetchAllTransactions.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAllTransactions.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export const { filter } = transactionSlice.actions;

export default transactionSlice.reducer;
