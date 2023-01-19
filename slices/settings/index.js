import { createSlice, createAction } from "@reduxjs/toolkit";

//actions
const navigate = createAction("navigate");

//init states
const initialState = {
  general: true,
  account: false,
  socialProfiles: false,
  payments: false,
  legal: false,
  password: false,
};

let temp;

//slices && reducers
export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(navigate, (state, action) => {
      Object.keys(state).forEach(function (key, index) {
        state[key] = false;
      });
      switch (action.payload) {
        case "General":
          state.general = true;
          break;
        case "Account":
          state.account = true;
          break;
        case "Payments":
          state.payments = true;
          break;
        case "Social profiles":
          state.socialProfiles = true;
          break;
        case "Legal":
          state.legal = true;
          break;
        case "Password":
          state.password = true;
          break;
        default:
          break;
      }
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default settingSlice.reducer;
