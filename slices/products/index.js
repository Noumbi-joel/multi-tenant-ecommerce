import { createSlice, createAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../helpers";

// import { toast } from "react-hot-toast";

//actions
const handleModalVisible = createAction("handleModalVisible");
const setId = createAction("setId");
const deleteItem = createAction("deleteItem");
const filtering = createAction("filtering");

//init states
const initialState = {
  products: PRODUCTS,
  idToDelete: null,
  filteredProducts: PRODUCTS,
};

let foundProduct, index, updatedProducts;

//slices && reducers
export const productSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleModalVisible, (state, action) => {
      const { payload } = action;
      updatedProducts = [...state.products];
      foundProduct = updatedProducts.find((p) => p.id === payload);
      index = updatedProducts.findIndex((p) => p.id === payload);
      foundProduct.visible = !foundProduct.visible;
      updatedProducts[index] = foundProduct;
      state.products = updatedProducts;
    });

    builder.addCase(setId, (state, action) => {
      state.idToDelete = action.payload;
    });

    builder.addCase(deleteItem, (state, action) => {
      state.products = state.products.filter((p) => p.id !== state.idToDelete);
      state.idToDelete = null;
    });

    builder.addCase(filtering, (state, action) => {
      state.filteredProducts = action.payload;
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default productSlice.reducer;
