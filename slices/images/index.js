import { createSlice, createAction } from "@reduxjs/toolkit";

//actions
const setImages = createAction("setImages");
const deleteImage = createAction("deleteImage");
const setFavicon = createAction("setFavicon");
const setStoreLogo = createAction("setStoreLogo");
const setFullLogo = createAction("setFullLogo");
const setAdminLogo = createAction("setAdminLogo");

const deleteFavicon = createAction("deleteFavicon");
const deleteStoreLogo = createAction("deleteStoreLogo");
const deleteFullImage = createAction("deleteFullImage");
const deleteAdminLogo = createAction("deleteAdminLogo");

// cat
const setImagesCat = createAction("setImagesCat");
const deleteImagesCat = createAction("deleteImagesCat");

//init states
const initialState = {
  images: [],
  productCat: [],
  favicon: null,
  storeLogo: null,
  fullLogo: null,
  adminLogo: null
};

let temp;

//slices && reducers
export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setImages, (state, action) => {
      state.images = action.payload;
    });

    builder.addCase(setImagesCat, (state, action) => {
      state.productCat = action.payload;
    });

    builder.addCase(deleteImage, (state, action) => {
      state.images = state.images.filter((image) => image !== action.payload);
    });

    builder.addCase(deleteImagesCat, (state, action) => {
      state.productCat = state.productCat.filter((image) => image !== action.payload);
    });

    builder.addCase(setFavicon, (state, action) => {
      state.favicon = action.payload;
    });

    builder.addCase(setStoreLogo, (state, action) => {
      state.storeLogo = action.payload;
    });

    builder.addCase(setFullLogo, (state, action) => {
      state.fullLogo = action.payload;
    });

    builder.addCase(deleteFavicon, (state, action) => {
      state.favicon = null;
    });

    builder.addCase(deleteStoreLogo, (state, action) => {
      state.storeLogo = null
    });

    builder.addCase(deleteFullImage, (state, action) => {
      state.fullLogo = null
    });

    builder.addCase(setAdminLogo, (state, action) => {
      state.adminLogo = action.payload
    });

    builder.addCase(deleteAdminLogo, (state, action) => {
      state.adminLogo = null
    });


    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default imageSlice.reducer;
