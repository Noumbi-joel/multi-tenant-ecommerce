import { createSlice, createAction } from "@reduxjs/toolkit";

//actions

//init states
const initialState = {
  filteredOrders: [],
  orders: [],
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
