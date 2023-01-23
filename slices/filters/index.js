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
const setFilter = createAction("setFilter");
const setSort = createAction("setSort");
const getOrders = createAction("getOrders");
const getCategories = createAction("getCategories");
const getProducts = createAction("getProducts");
const getCustomers = createAction("getCustomers");


//init states
const initialState = {
  filter: [],
  sortBy: [],
  filterValue: "",
  sortByValue: "",
};

//slices && reducers
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setFilter, (state, action) => {
      state.filterValue = action.payload;
    });

    builder.addCase(setSort, (state, action) => {
      state.sortByValue = action.payload;
    });

    builder.addCase(getOrders, (state, action) => {
      state.filter = ORDERS_FILTERS;
      state.sortBy = ORDERS_SORT;
      state.filterValue = ORDERS_FILTERS[0].title;
      state.sortByValue = ORDERS_SORT[0].title;
    });
    builder.addCase(getProducts, (state, action) => {
      state.filter = FILTERS;
      state.sortBy = UPDATES;
      state.filterValue = FILTERS[0].title;
      state.sortByValue = UPDATES[0].title;
    });
    builder.addCase(getCategories, (state, action) => {
      state.filter = FILTERS_CAT;
      state.sortBy = UPDATES_CAT;
      state.filterValue = FILTERS_CAT[0].title;
      state.sortByValue = UPDATES[0].title;
    });
    builder.addCase(getCustomers, (state, action) => {
      state.sortBy = CUSTOMERS_SORT;
      state.sortByValue = CUSTOMERS_SORT[0].title;
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default filterSlice.reducer;
