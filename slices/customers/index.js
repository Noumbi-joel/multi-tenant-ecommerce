import { createSlice, createAction } from "@reduxjs/toolkit";
import { CUSTOMERS } from "../../helpers";

//actions
const filteringCustomers = createAction("filteringCustomers");
const sortCustomerByDesc = createAction("sortCustomerByDesc");
const sortCustomerByAsc = createAction("sortCustomerByAsc");
const sortCustomerByDate = createAction("sortCustomerByDate");

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

    builder.addCase(sortCustomerByDesc, (state, action) => {
      state.filteredCustomers.sort((s1, s2) => {
        return s1.totalSpent - s2.totalSpent;
      });
    });

    builder.addCase(sortCustomerByAsc, (state, action) => {
      state.filteredCustomers.sort((s1, s2) => {
        return s2.totalSpent - s1.totalSpent;
      });
    });

    builder.addCase(sortCustomerByDate, (state, action) => {
      state.filteredCustomers.sort((s1, s2) => {
        let x = new Date(s1.createdAt);
        let y = new Date(s2.createdAt);
        return y - x;
      });
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default customerSlice.reducer;
