import { createSlice, createAction } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../helpers";

//actions
const filteringCategory = createAction("filteringCategory");
const setFilterCategory = createAction("setFilterCategory");
const handleCatItemSelect = createAction("handleCatItemSelect");
const handleItemsCatSelected = createAction("handleItemsCatSelected");
const discardCatItemsSelected = createAction("discardCatItemsSelected");
const deleteCatItems = createAction("deleteCatItems");
const handleDropdownCatItem = createAction("handleDropdownCatItem");
const setIdCat = createAction("setIdCat");
const deleteCatItem = createAction("deleteCatItem");

const sortCategoryByDate = createAction("sortCategoryByDate");
const sortCategoryByName = createAction("sortCategoryByName");

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

    builder.addCase(handleDropdownCatItem, (state, action) => {
      const { payload } = action;
      let updatedProducts = [...state.filteredCategories];
      let foundProduct = updatedProducts.find((p) => p.id === payload);
      let index = updatedProducts.findIndex((p) => p.id === payload);
      foundProduct.visible = !foundProduct.visible;
      updatedProducts[index] = foundProduct;
      state.filteredCategories = updatedProducts;
    });

    builder.addCase(setIdCat, (state, action) => {
      state.idToDelete = action.payload;
    });

    builder.addCase(deleteCatItem, (state, action) => {
      state.filteredCategories = state.filteredCategories.filter(
        (p) => p.id !== state.idToDelete
      );
      state.idToDelete = null;
    });

    builder.addCase(sortCategoryByDate, (state) => {
      state.filteredCategories.sort((c1, c2) => {
        let x = new Date(c1.createdAt);
        let y = new Date(c2.createdAt);
        return y - x;
      });
    });

    builder.addCase(sortCategoryByName, (state) => {
      state.filteredCategories.sort(function (a, b) {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default categorySlice.reducer;
