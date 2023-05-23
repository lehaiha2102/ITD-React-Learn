import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true
        },

        hideMiniCart(state) {
            state.showMiniCart = false
        },

        addToCartForm(state, action) {
            const item = action.payload
            const index = state.cartItems.findIndex((x) => x.slug = item.slug)
            if (index >= 0) {
                state.cartItems[index].quantity += item.quantity
            } else {
                state.cartItems.push(item)
            }
        },

        setQuantity(state, action) {
            const { slug, quantity } = action.payload
            const index = state.cartItems.findIndex((x) => x.slug = slug)
            if (index >= 0) {
                state.cartItems[index].quantity = quantity
            }
        },

        removeItemCart(state, action) {
            const slugNeedToRemove = action.payload
            state.cartItems = state.cartItems.filter(x => x.slug != slugNeedToRemove)
        },
    },
})

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCartForm, setQuantity, removeItemCart } = actions;
export default reducer;