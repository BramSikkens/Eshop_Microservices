import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURLs } from "../../lib/Microservices";
const initialState = {
  user: undefined,
};

export const signInRx = createAsyncThunk(
  "authentication/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const user = await fetch(baseURLs.identityAPI + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      return await user.json();
    } catch (e) {
      console.error(e.message);
    }
  }
);

export const registerRx = createAsyncThunk(
  "authentication/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const user = await fetch(baseURLs.identityAPI + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      return await user.json();
    } catch (e) {
      console.error(e.message);
    }
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // signInRx: (state, action) => {
    //   console.log("slice", action.payload);
    //   state.user = action.payload;
    // },
    signOutRx: (state) => {
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      signInRx.fulfilled,
      (state, action) => {
        state.user = action.payload;
      },
      builder.addCase(registerRx.fulfilled, (state, action) => {
        state.user = action.payload;
      })
    );
  },
});

// Action creators are generated for each case reducer function
export const { signOutRx } = authenticationSlice.actions;

export default authenticationSlice.reducer;
