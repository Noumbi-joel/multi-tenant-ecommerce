import { createSlice, createAction } from "@reduxjs/toolkit";

//actions
const setFilter = createAction("setFilter");
const setSort = createAction("setSort");

//init states
const initialState = {
  filter: "all products",
  sortBy: "last updated",
};

//slices && reducers
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });

    builder.addCase(setSort, (state, action) => {
        state.sortBy = action.payload;
      });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default filterSlice.reducer;
