import { createSlice, createAction } from "@reduxjs/toolkit";
import { ORDERS } from "../../helpers";

//actions
const filteringOrders = createAction("filteringOrders");
const setFilterOrder = createAction("setFilterOrder");

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

    builder.addCase(setFilterOrder, (state, action) => {
      switch (action.payload) {
        case "fullfilled":
          state.filteredOrders = state.orders.filter((p) => p.fullF !== false);
          break;
        case "unfullfilled":
          state.filteredOrders = state.orders.filter((p) => p.fullF !== true);
          break;
        default:
          state.filteredOrders = state.orders;
          break;
      }
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default orderSlice.reducer;
