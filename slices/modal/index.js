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

//init states
const initialState = {
  modalSingleItem: false,
  modalAllItem: false,
  allChecker: false,
  itemName: "",
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

    builder.addCase(setItemName, (state, action) => {
      state.itemName = action.payload;
    });

    builder.addCase(toggleModalAllItem, (state) => {
      state.modalAllItem = !state.modalAllItem;
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default modalSlice.reducer;
