import { createSlice, createAction } from "@reduxjs/toolkit";
import { CUSTOMERS } from "../../helpers";

//actions

//init states
const initialState = {
  customers: CUSTOMERS,
  filteredCustomers: CUSTOMERS,
};

//slices && reducers
export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default customerSlice.reducer;
