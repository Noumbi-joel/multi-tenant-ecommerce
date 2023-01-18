import { createSlice, createAction } from "@reduxjs/toolkit";
import { ORDERS } from "../../helpers";

//actions

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

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default orderSlice.reducer;
