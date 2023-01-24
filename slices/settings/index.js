import { SETTINGS_NAV, VERTICAL_HEADER_ITEMS, PAYMENTS } from "../../helpers";

import { createSlice, createAction } from "@reduxjs/toolkit";

//actions
const navigate = createAction("navigate");
const setActive = createAction("setActive");
const setVerticalActive = createAction("setVerticalActive");

//init states
const initialState = {
  state: {
    general: true,
    account: false,
    socialProfiles: false,
    payments: false,
    legal: false,
    password: false,
  },
  settings_nav: SETTINGS_NAV,
  vertical_header_nav: VERTICAL_HEADER_ITEMS,
  payments: PAYMENTS
};

let temp;

//slices && reducers
export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(navigate, (state, action) => {
      Object.keys(state.state).forEach(function (key, index) {
        state.state[key] = false;
      });
      switch (action.payload) {
        case "General":
          state.state.general = true;
          break;
        case "Account":
          state.state.account = true;
          break;
        case "Payments":
          state.state.payments = true;
          break;
        case "Social profiles":
          state.state.socialProfiles = true;
          break;
        case "Legal":
          state.state.legal = true;
          break;
        case "Password":
          state.state.password = true;
          break;
        default:
          break;
      }
    });

    builder.addCase(setActive, (state, action) => {
      for (let i = 0; i < state.settings_nav.length; i++) {
        if (state.settings_nav[i].title === action.payload) {
          state.settings_nav[i].isActive = true;
        } else {
          state.settings_nav[i].isActive = false;
        }
      }
    });

    builder.addCase(setVerticalActive, (state, action) => {
      for (let i = 0; i < state.vertical_header_nav.length; i++) {
        if (state.vertical_header_nav[i].value === action.payload) {
          state.vertical_header_nav[i].isActive = true;
        } else {
          state.vertical_header_nav[i].isActive = false;
        }
      }
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default settingSlice.reducer;
