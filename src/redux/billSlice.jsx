import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Pizza: 0,
  Burger: 0,
  IceCream: 0
};

const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    increment: (state, action) => {
      state[action.payload]++;
    },
    decrement: (state, action) => {
      if (state[action.payload] > 0) state[action.payload]--;
    }
  }
});

export const { increment, decrement } = billSlice.actions;
export default billSlice.reducer;
