import { createSlice, createAction } from "@reduxjs/toolkit";
import { ORDERS } from "../../helpers";

//actions
const filteringOrders = createAction("filteringOrders");
const setFilterOrder = createAction("setFilterOrder");
const sortOrderByDate = createAction("sortOrderByDate");
const sortOrderByNumber = createAction("sortOrderByNumber");

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

    builder.addCase(sortOrderByDate, (state, action) => {
      state.filteredOrders.sort((o1, o2) => {
        let x = new Date(o1.createdAt);
        let y = new Date(o2.createdAt);
        return y - x;
      });
    });

    builder.addCase(sortOrderByNumber, (state, action) => {
      state.filteredOrders.sort((o1, o2) => {
        return o1.id - o2.id;
      });
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default orderSlice.reducer;
