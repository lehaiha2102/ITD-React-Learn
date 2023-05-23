import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Auth/userSlice.js';
import cartReducer from '../features/Cart/cartSlice.js';

const rootReducer = {
    user: userReducer,
    cart: cartReducer,
};

const store = configureStore({
    reducer: rootReducer,
})

export default store;
