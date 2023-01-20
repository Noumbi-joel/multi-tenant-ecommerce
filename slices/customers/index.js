import { createSlice, createAction } from "@reduxjs/toolkit";
import { CUSTOMERS } from "../../helpers";

//actions
const filteringCustomers = createAction("filteringCustomers");

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
    builder.addCase(filteringCustomers, (state, action) => {
      state.filteredCustomers = action.payload;
    });
    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default customerSlice.reducer;
