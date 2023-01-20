import { createSlice, createAction } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../helpers";

//actions
const filteringCategory = createAction("filteringCategory");

//init states
const initialState = {
  categories: CATEGORIES,
  filteredCategories: CATEGORIES,
  idToDelete: null,
  itemsSelected: [],
};

//slices && reducers
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(filteringCategory, (state, action) => {
      state.filteredCategories = action.payload;
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default categorySlice.reducer;
