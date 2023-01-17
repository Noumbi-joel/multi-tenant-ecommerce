import { createSlice, createAction } from "@reduxjs/toolkit";

//actions
const setImages = createAction("setImages");
const deleteImage = createAction("deleteImage");

// cat
const setImagesCat = createAction("setImagesCat");
const deleteImagesCat = createAction("deleteImagesCat");

//init states
const initialState = {
  images: [],
  productCat: [],
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

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default imageSlice.reducer;
