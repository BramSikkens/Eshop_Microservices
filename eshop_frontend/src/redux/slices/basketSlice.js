import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        id: action.payload.id,
        title: action.payload.title,
        quantity: 1,
      });
    },
    removeItem: (state, action) => {
      return {
        items: state.items.filter((value) => value.id !== action.payload),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = basketSlice.actions;

export default basketSlice.reducer;
