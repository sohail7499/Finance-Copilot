import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transaction", //ye slice kis naam ka hai?
  initialState: initialState, //iski starting state kya hai?
  reducers: {
    addTransactions: (state, action) => {
      state.transactions.push(action.payload);
      //action.payload mein jo transaction aaya hai, usko Redux ke transactions array mein add kar do.
    },

    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const { addTransactions, setTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;
