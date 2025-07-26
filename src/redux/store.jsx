import { configureStore } from '@reduxjs/toolkit';
import billReducer from './billSlice.jsx';

export const store = configureStore({
  reducer: {
    bill: billReducer
  }
});
