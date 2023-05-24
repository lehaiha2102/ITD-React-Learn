import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMiniCart: false,
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCartForm(state, action) {
      const item = action.payload;
      const index = state.cartItems.findIndex((x) => x.slug === item.slug);
      if (index >= 0) {
        state.cartItems[index].quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }

      saveCartToLocalStorage(state.cartItems); // Cập nhật giỏ hàng trong localStorage
    },
    setQuantity(state, action) {
      const { slug, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.slug === slug);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }

      saveCartToLocalStorage(state.cartItems); // Cập nhật giỏ hàng trong localStorage
    },
    removeItemCart(state, action) {
      const slugNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (x) => x.slug !== slugNeedToRemove
      );

      saveCartToLocalStorage(state.cartItems); // Cập nhật giỏ hàng trong localStorage
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCartForm,
  setQuantity,
  removeItemCart,
} = actions;
export default reducer;
