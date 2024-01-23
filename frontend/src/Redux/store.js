import { configureStore } from '@reduxjs/toolkit'

// import Slices
import {AuthSlice} from './Slices/AuthSlice'
import { CategorySlice } from './Slices/CategorySlice'
import { ProductSlice } from './Slices/ProductSlice'
import { CommentSlice } from './Slices/CommentSlice'
import { cartSlice } from './Slices/CartSlice'

export const store = configureStore({
  reducer: {
    auth:AuthSlice.reducer,
    products:ProductSlice.reducer,
    categorys:CategorySlice.reducer,
    comments:CommentSlice.reducer,
    cart:cartSlice.reducer,
  }
})