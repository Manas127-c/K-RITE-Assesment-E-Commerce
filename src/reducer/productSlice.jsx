import { createSlice } from '@reduxjs/toolkit'
import axios from '../utils/axios'

const initialState={
    info:null
}

export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        loadProduct:(state,action)=>{
            state.info=action.payload
        },
        removeProduct:(state)=>{
            state.info=null
        }
    }
})


export const {loadProduct,removeProduct}=productSlice.actions;
export default productSlice.reducer;

export const infopsasync=(id)=>async(dispatch,getstate)=>{
    try {
        const details= await axios.get(`/product/${id}`)
        const bulkdata={
            details: details.data,

        }
        dispatch(loadProduct(bulkdata))
    } catch (error) {
        console.log(error)
    }
}