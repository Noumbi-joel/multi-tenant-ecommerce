import { createSlice, createAction } from "@reduxjs/toolkit";
import { ORDERS } from "../../helpers";

//actions
const filteringOrders = createAction("filteringOrders");

//init states
const initialState = {
  filteredOrders: ORDERS,
  orders: ORDERS,
};

//slices && reducers
export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(filteringOrders, (state, action) => {
      state.filteredOrders = action.payload;
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default orderSlice.reducer;
