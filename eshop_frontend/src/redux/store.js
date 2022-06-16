import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "../redux/slices/authenticationSlice";
import basketSlice from "../redux/slices/basketSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    basket: basketSlice,
  },
});
