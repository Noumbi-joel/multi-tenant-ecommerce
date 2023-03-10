import { createSlice, createAction } from "@reduxjs/toolkit";

// import { toast } from "react-hot-toast";

//actions
const openSingleModal = createAction("openSingleModal");
const closeSingleModal = createAction("closeSingleModal");
const setItemName = createAction("setItemName");
const toggleModalAllItem = createAction("toggleModalAllItem");
const openAllChecker = createAction("openAllChecker");
const closeAllChecker = createAction("closeAllChecker");
const openAllItemModal = createAction("openAllItemModal");
const closeAllSelectedModal = createAction("closeAllSelectedModal");

// category
const closeAllCatChecker = createAction("closeAllCatChecker");
const openAllCatChecker = createAction("openAllCatChecker");
const openModalAllItemsCat = createAction("openModalAllItemsCat");
const closeAllSelectedModalCat = createAction("closeAllSelectedModalCat");
const openSingleModalCat = createAction("openSingleModalCat");
const closeSingleModalCat = createAction("closeSingleModalCat");
const setCatName = createAction("setCatName");

// Drawer
const openDrawer = createAction("openDrawer");
const closeDrawer = createAction("closeDrawer");
const openFilterDrawer = createAction("openFilterDrawer");
const closeFilterDrawer = createAction("closeFilterDrawer");
const openCartDrawer = createAction("openCartDrawer");
const closeCartDrawer = createAction("closeCartDrawer");

//init states
const initialState = {
  modalSingleItem: false,
  modalAllItem: false,
  allChecker: false,
  itemName: "",
  allCheckerCat: false,
  modalSingleItemCat: false,
  modalAllItemCat: false,
  drawerVisible: false,
  filterDrawerVisible: false,
  cartDrawerVisible: false,
};

//slices && reducers
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(openSingleModal, (state) => {
      state.modalSingleItem = true;
    });

    builder.addCase(closeSingleModal, (state) => {
      state.modalSingleItem = false;
    });

    builder.addCase(openAllItemModal, (state) => {
      state.modalAllItem = true;
    });

    builder.addCase(closeAllSelectedModal, (state) => {
      state.modalAllItem = false;
    });

    builder.addCase(openAllChecker, (state) => {
      state.allChecker = true;
    });
    builder.addCase(closeAllChecker, (state) => {
      state.allChecker = false;
    });

    builder.addCase(openAllCatChecker, (state) => {
      state.allCheckerCat = true;
    });
    builder.addCase(closeAllCatChecker, (state) => {
      state.allCheckerCat = false;
    });
    builder.addCase(openModalAllItemsCat, (state) => {
      state.modalAllItemCat = true;
    });
    builder.addCase(closeAllSelectedModalCat, (state) => {
      state.modalAllItemCat = false;
    });

    builder.addCase(setItemName, (state, action) => {
      state.itemName = action.payload;
    });

    builder.addCase(toggleModalAllItem, (state) => {
      state.modalAllItem = !state.modalAllItem;
    });

    builder.addCase(setCatName, (state, action) => {
      state.itemName = action.payload;
    });

    builder.addCase(openSingleModalCat, (state) => {
      state.modalSingleItemCat = true;
    });

    builder.addCase(closeSingleModalCat, (state) => {
      state.modalSingleItemCat = false;
    });

    builder.addCase(openDrawer, (state) => {
      state.drawerVisible = true;
    });

    builder.addCase(closeDrawer, (state) => {
      state.drawerVisible = false;
    });

    builder.addCase(openFilterDrawer, (state) => {
      state.filterDrawerVisible = true;
    });

    builder.addCase(closeFilterDrawer, (state) => {
      state.filterDrawerVisible = false;
    });

    builder.addCase(openCartDrawer, (state) => {
      state.cartDrawerVisible = true;
    });

    builder.addCase(closeCartDrawer, (state) => {
      state.cartDrawerVisible = false;
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default modalSlice.reducer;
