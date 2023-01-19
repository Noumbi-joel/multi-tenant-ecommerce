import { createSlice, createAction } from "@reduxjs/toolkit";

//actions

//init states
const initialState = {
  general: true,
  account: false,
  socialProfiles: false,
  payments: false,
  legal: false,
  password: false,
};

//slices && reducers
export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default settingSlice.reducer;
