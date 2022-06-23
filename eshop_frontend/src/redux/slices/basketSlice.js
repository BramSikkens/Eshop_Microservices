import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURLs } from "../../lib/Microservices";

const fetchUserBasket = createAsyncThunk(
  "basket/fetchUserBasket",
  async (userId, thunkAPI) => {
    return await (
      await fetch(baseURLs.basketAPI + "/baskets/" + userId)
    ).json();
  }
);

const addItemToUserBasket = createAsyncThunk(
  "basket/addToUserBasket",
  async ({ userId, item }, thunkAPI) => {
    const response = await fetch(
      baseURLs.basketAPI + "/basket/" + userId + "/item",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );

    return await response.json();
  }
);

const initialState = {
  _id: "",
  customerId: "",
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
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserBasket.fulfilled,
      (state, action) => {
        console.log("paloooad", action);
        return action.payload;
      },
      builder.addCase(addItemToUserBasket.fulfilled, (state, action) => {
        return action.payload;
      })
    );
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = basketSlice.actions;

export { fetchUserBasket, addItemToUserBasket };
export default basketSlice.reducer;
