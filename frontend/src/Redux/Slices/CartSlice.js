// import { createSlice } from '@reduxjs/toolkit';

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         cart:localStorage.getItem('Cart') ? localStorage.getItem('Cart') : []
//     },
//     reducers: {
//         addCart: (state, action) => {
//             //localStorage.setItem('Cart',state.cart.push(action.payload))
//             //state.cart = action.payload
//             state.cart = [...state.cart,action.payload]
//             localStorage.setItem('Cart',JSON.stringify(state.cart))
//         },
//     },
// });

// export const { addCart } = cartSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []
    },
    reducers: {
        addCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            localStorage.setItem('Cart', JSON.stringify(state.cart));
        },

        clearCart:(state , action) => {
            state.cart = []
            localStorage.removeItem('Cart')
        }
    },
});

export const { addCart , clearCart} = cartSlice.actions;