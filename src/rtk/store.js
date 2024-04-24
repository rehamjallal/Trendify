import { configureStore } from '@reduxjs/toolkit';
import productsSlices from './slices/productsSlices';
import productsCart from './slices/cartslices';
export const store = configureStore({
  reducer: {
    products: productsSlices,
    cart: productsCart
  },
});
