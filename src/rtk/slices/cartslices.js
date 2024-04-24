// // // import { createSlice } from "@reduxjs/toolkit";

// // // export const carteSlice = createSlice({
// // //     initialState: [],
// // //     name: "cartSlice",
// // //     reducers: {
// // //         addToCart: (state, action) => {
// // //             const findProduct = state.find((product) => product.id === action.payload.id)
// // //             if (findProduct) {
// // //                 findProduct.quantity += 1
// // //             } else {
// // //                 state.products.push({ ...action.payload, quantity: 1 });

// // //                 // const productClone = { ...action.payload, quantity: 1 }
// // //                 // state.totalCount += 1; // Increase the total count
// // //             }
// // //         },
// // //         deleteCart: (state, action) => {
// // //             // هنا معناه انك رجعلى كل ال برودكتس م عداالبرودكت اللى انا دوست عليه ب الهى دى بتاعى
// // //             return state.filter(product => product.id !== action.payload);
// // //         },
// // //         deleteFromQuantity: (state, action) => {
// // //             const product = state.find(product => product.id === action.payload);
// // //             if (product && product.quantity > 1) {
// // //                 product.quantity -= 1;
// // //             }
// // //         }
// // //     }
// // // });

// // // export default carteSlice.reducer;

// // import { createSlice } from "@reduxjs/toolkit";

// // export const cartSlice = createSlice({
// //   name: "cartSlice",
// //   initialState: {
// //     products: [],
// //     totalCount: 0
// // },
// //   reducers: {
// //     addToCart: (state, action) => {
// //         const { id } = action.payload;
// //         const existingProduct = state.products.find(product => product.id === id);

// //       if (existingProduct) {
// //         existingProduct.quantity += 1;
// //     } else {
// //         state.products.push({ ...action.payload, quantity: 1 });
// //       }
      
// //       state.totalCount += 1;
// //     },
// //     deleteFromCart: (state, action) => {
// //         const { id } = action.payload;
// //         const existingProductIndex = state.products.findIndex(product => product.id === id);
        
// //       if (existingProductIndex !== -1) {
// //         const existingProduct = state.products[existingProductIndex];
// //         existingProduct.quantity -= 1;
// //         state.totalCount -= 1;

// //         if (existingProduct.quantity === 0) {
// //           state.products.splice(existingProductIndex, 1);
// //         }
// //     }
// // }
// // }
// // });

// // // export const { addToCart, deleteFromCart } = cartSlice.actions;
// // export default cartSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState: {
//     products: [],
//     totalCount: 0,
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const { id } = action.payload;
//       const existingProduct = state.products.find((product) => product.id === id);
      
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.products.push({ ...action.payload, quantity: 1 });
//       }
      
//       state.totalCount += 1;
//     },
//     deleteFromCart: (state, action) => {
//       const { id } = action.payload;
//       const existingProductIndex = state.products.findIndex(
//         (product) => product.id === id
//       );
      
//       if (existingProductIndex !== -1) {
//         const existingProduct = state.products[existingProductIndex];
//         existingProduct.quantity -= 1;
//         state.totalCount -= 1;

//         if (existingProduct.quantity === 0) {
//           state.products.splice(existingProductIndex, 1);
//         }
//       }
//     },
//   },
// });

// // export const { addToCart, deleteFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
// cartslices.js
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
