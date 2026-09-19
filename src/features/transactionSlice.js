import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transaction", //ye slice kis naam ka hai?
  initialState: initialState, //iski starting state kya hai?
  reducers: {
    //state ko change karne wale reducers kaunse hain?
    addTransaction(state, action) {
      state.transactions.push(action.payload);
    },
  },
});
