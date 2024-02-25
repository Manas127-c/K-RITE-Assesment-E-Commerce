import { configureStore } from '@reduxjs/toolkit'
import productreducer from '../reducer/productSlice'
import addcartreducer from '../reducer/addcartSlice'
export const store = configureStore({
  reducer: {
    product:productreducer,
    addcart:addcartreducer,
  },
})