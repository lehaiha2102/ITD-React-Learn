import { createSelector } from '@reduxjs/toolkit';

export const cartItemSelector = (state) => state.cart.cartItems;

export const cartItemCountSelector = createSelector(cartItemSelector,
    (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
)

export const cartTotalSelector = createSelector(cartItemSelector,
    (cartItems) => cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
)