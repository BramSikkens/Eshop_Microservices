import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    signInRx: (state, action) => {
      console.log("slice", action.payload);
      state.user = action.payload;
    },
    signOutRx: (state) => {
      state.user = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInRx, signOutRx } = authenticationSlice.actions;

export default authenticationSlice.reducer;
