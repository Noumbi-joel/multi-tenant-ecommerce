import { createSlice, createAction } from "@reduxjs/toolkit";
import {
  FILTERS_CAT,
  ORDERS_FILTERS,
  ORDERS_SORT,
  FILTERS,
  UPDATES,
  CUSTOMERS_SORT,
  UPDATES_CAT
} from "../../helpers";

//actions
const setStoreValue = createAction("setStoreValue");

//init states
const initialState = {
  storeValues: null
};

//slices && reducers
export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setStoreValue, (state, action) => {
        state.storeValues = action.payload;
    })

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default storeSlice.reducer;
