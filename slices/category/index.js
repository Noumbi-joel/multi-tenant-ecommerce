import { createSlice, createAction } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../helpers";

//actions
const filteringCategory = createAction("filteringCategory");
const setFilterCategory = createAction("setFilterCategory");

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

    builder.addCase(setFilterCategory, (state, action) => {
      switch (action.payload) {
        case "published":
          state.filteredCategories = state.categories.filter(
            (p) => p.published !== false
          );
          break;
        case "draft":
          state.filteredCategories = state.categories.filter(
            (p) => p.draft !== false
          );
          break;
        default:
          state.filteredCategories = state.categories;
          break;
      }
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default categorySlice.reducer;
