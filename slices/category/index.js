import { createSlice, createAction } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../helpers";

//actions
const filteringCategory = createAction("filteringCategory");
const setFilterCategory = createAction("setFilterCategory");
const handleCatItemSelect = createAction("handleCatItemSelect");
const handleItemsCatSelected = createAction("handleItemsCatSelected");
const discardCatItemsSelected = createAction("discardCatItemsSelected");
const deleteCatItems = createAction("deleteCatItems");

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

    builder.addCase(handleCatItemSelect, (state, action) => {
      const item = action.payload;
      let updatedCategories = [...state.filteredCategories];
      let foundCategory = updatedCategories.find((p) => p.id === item.id);
      let index = updatedCategories.findIndex((p) => p.id === item.id);
      foundCategory.selected = !foundCategory.selected;
      updatedCategories[index] = foundCategory;
      state.filteredCategories = updatedCategories;

      let categoryExist = state.itemsSelected.find((p) => p.id === item.id);
      if (categoryExist) {
        let temp = [...state.itemsSelected].filter(
          (i) => i.id !== categoryExist.id
        );
        state.itemsSelected = temp;
      } else {
        state.itemsSelected.push(item);
      }
    });

    builder.addCase(handleItemsCatSelected, (state, action) => {
      for (let i = 0; i < state.filteredCategories.length; i++) {
        state.filteredCategories[i].selected =
          !state.filteredCategories[i].selected;
      }
      if (!state.itemsSelected.length) {
        state.itemsSelected = state.filteredCategories;
      } else {
        state.itemsSelected = [];
      }
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

    builder.addCase(deleteCatItems, (state, action) => {
      state.filteredCategories = state.filteredCategories.filter(
        (f) => f.selected !== true
      );
      state.itemsSelected = [];
    });

    builder.addCase(discardCatItemsSelected, (state) => {
      state.itemsSelected = [];
      for (let i = 0; i < state.filteredCategories.length; i++) {
        if (state.filteredCategories[i].selected) {
          state.filteredCategories[i].selected = false;
        }
      }
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default categorySlice.reducer;
