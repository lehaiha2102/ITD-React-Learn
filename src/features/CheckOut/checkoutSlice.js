import { createSlice } from "@reduxjs/toolkit";
import productApi from "../../../api/productApi";

const initialState = {
  phone: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    changePhone(state, action) {
      state.phone = action.payload;
    },
  },
});

const { actions, reducer } = checkoutSlice;
export const {
  changePhone
} = actions;
export default reducer;
