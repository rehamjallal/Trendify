import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    products: [],
    totalCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find(product => product.id === id);
      
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      
      state.totalCount += 1;
    },
    deleteFromCart: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.products.findIndex(product => product.id === id);
      
      if (existingProductIndex !== -1) {
        const existingProduct = state.products[existingProductIndex];
        existingProduct.quantity -= 1;
        state.totalCount -= 1;
        
        if (existingProduct.quantity === 0) {
          state.products.splice(existingProductIndex, 1);
        }
      }
    },
    deleteCart: (state, action) => { // Add this function
      const { id } = action.payload;
      const existingProductIndex = state.products.findIndex(product => product.id === id);
      
      if (existingProductIndex !== -1) {
        state.products.splice(existingProductIndex, 1);
      }
    },
  },
});

export const { addToCart, deleteCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
