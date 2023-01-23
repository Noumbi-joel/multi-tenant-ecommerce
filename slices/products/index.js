import { createSlice, createAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../helpers";

//actions
const handleModalVisible = createAction("handleModalVisible");
const handleItemSelected = createAction("handleItemSelected");
const setId = createAction("setId");
const deleteItem = createAction("deleteItem");
const filtering = createAction("filtering");
const handleItemsSelected = createAction("handleItemsSelected");
const discardItemSelected = createAction("discardItemSelected");
const deleteItems = createAction("deleteItems");
const handleVisible = createAction("handleVisible");
const setFilterProduct = createAction("setFilterProduct");

const sortProductByName = createAction("sortProductByName");
const sortProductByDate = createAction("sortProductByDate");
const sortProductByStock = createAction("sortProductByStock");


//init states
const initialState = {
  products: PRODUCTS,
  filteredProducts: PRODUCTS,
  idToDelete: null,
  itemsSelected: [],
  invisibleProducts: [],
};

let foundProduct, index, updatedProducts;

//slices && reducers
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleModalVisible, (state, action) => {
      const { payload } = action;
      updatedProducts = [...state.filteredProducts];
      foundProduct = updatedProducts.find((p) => p.id === payload);
      index = updatedProducts.findIndex((p) => p.id === payload);
      foundProduct.visible = !foundProduct.visible;
      updatedProducts[index] = foundProduct;
      state.filteredProducts = updatedProducts;
    });

    builder.addCase(handleItemSelected, (state, action) => {
      const item = action.payload;
      updatedProducts = [...state.filteredProducts];
      foundProduct = updatedProducts.find((p) => p.id === item.id);
      index = updatedProducts.findIndex((p) => p.id === item.id);
      foundProduct.selected = !foundProduct.selected;
      updatedProducts[index] = foundProduct;
      state.filteredProducts = updatedProducts;

      let productExist = state.itemsSelected.find((p) => p.id === item.id);
      if (productExist) {
        let temp = [...state.itemsSelected].filter(
          (i) => i.id !== productExist.id
        );
        state.itemsSelected = temp;
      } else {
        state.itemsSelected.push(item);
      }
    });

    builder.addCase(setId, (state, action) => {
      state.idToDelete = action.payload;
    });

    builder.addCase(deleteItems, (state, action) => {
      let temp = [...state.filteredProducts].filter((f) => f.selected !== true);
      state.filteredProducts = temp;
      state.itemsSelected = [];
    });

    builder.addCase(discardItemSelected, (state, action) => {
      state.itemsSelected = [];
      for (let i = 0; i < state.filteredProducts.length; i++) {
        if (state.filteredProducts[i].selected) {
          state.filteredProducts[i].selected = false;
        }
      }
    });

    builder.addCase(handleItemsSelected, (state, action) => {
      for (let i = 0; i < state.filteredProducts.length; i++) {
        state.filteredProducts[i].selected =
          !state.filteredProducts[i].selected;
      }
      if (!state.itemsSelected.length) {
        state.itemsSelected = state.filteredProducts;
      } else {
        state.itemsSelected = [];
      }
    });

    builder.addCase(deleteItem, (state, action) => {
      state.filteredProducts = state.filteredProducts.filter(
        (p) => p.id !== state.idToDelete
      );
      state.idToDelete = null;
    });

    builder.addCase(filtering, (state, action) => {
      state.filteredProducts = action.payload;
    });

    builder.addCase(handleVisible, (state, action) => {
      let product = state.filteredProducts.find((p) => p.id === action.payload);
      state.filteredProducts = state.filteredProducts.filter(
        (p) => p.id !== product.id
      );
      state.invisibleProducts.push(product);
    });

    builder.addCase(setFilterProduct, (state, action) => {
      switch (action.payload) {
        case "published":
          state.filteredProducts = state.products.filter(
            (p) => p.published !== false
          );
          break;
        case "draft":
          state.filteredProducts = state.products.filter(
            (p) => p.draft !== false
          );
          break;
        case "hidden":
          state.filteredProducts = state.invisibleProducts;
          break;
        default:
          state.filteredProducts = state.products;
          break;
      }
    });

    builder.addCase(sortProductByDate, (state) => {
      state.filteredProducts.sort((p1, p2) => {
        let x = new Date(p1.createdAt);
        let y = new Date(p2.createdAt);
        return y - x;
      });
    });

    builder.addCase(sortProductByStock, (state) => {
      state.filteredProducts.sort((p1, p2) => {
        return p2.stock - p1.stock;
      });
    });

    builder.addCase(sortProductByName, (state) => {
      state.filteredProducts.sort(function (a, b) {
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

export default productSlice.reducer;
