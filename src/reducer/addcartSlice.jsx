import { createSlice } from '@reduxjs/toolkit'
import {toast} from 'react-toastify'

const initialState={
    cartitem:localStorage.getItem('cartitem') ? JSON.parse(localStorage.getItem('cartitem')):[],
    carttotalquantity:0,
    carttotalamount:0
}

export const addcartSlice=createSlice({
    name:'addcart',
    initialState,
    reducers:{
        loadaddcart:(state,action)=>{
            const itemindex=state.cartitem.findIndex((e)=>e.id === action.payload.id)
            if(itemindex>=0){
                state.cartitem[itemindex].cartquantity+=1
                toast.success(`increse  ${state.cartitem[itemindex].title} cart quantity`,{
                    position:'bottom-left'
                })
                
            }else{
                const tempcart={...action.payload,cartquantity:1}
                state.cartitem.push(tempcart)
                toast.success(`${action.payload.title} added in your cart`,{
                    position:'bottom-left'
                })
            }
            localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
        },
        removeaddcart:(state,action)=>{
            const removeitem=state.cartitem.filter((e)=> e.id!== action.payload.id)
            state.cartitem=removeitem
            localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
            toast.error(`${action.payload.title} remove in your cart`,{
                position:'bottom-left'
            })
        },
        clearcart:(state)=>{
            if(state.cartitem.length>0){
            state.cartitem=[]
            localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
            toast.error(` all Products remove in your cart `,{
                position:'bottom-left'
            })
        }
        },
        decreasecart:(state,action)=>{
            const itemindex=state.cartitem.findIndex((e)=>e.id === action.payload.id)
            if(state.cartitem[itemindex].cartquantity>1){
                state.cartitem[itemindex].cartquantity-=1
                toast.error(`Decrease ${action.payload.title} cart quantity`,{
                    position:'bottom-left'
                })
            }else if(state.cartitem[itemindex].cartquantity===1){
                const removeitem=state.cartitem.filter((e)=> e.id!== action.payload.id)
            state.cartitem=removeitem
            localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
            toast.error(`${action.payload.title} remove in your cart`,{
                position:'bottom-left'
            })
            }
        },
        increasecart:(state,action)=>{
            const itemindex=state.cartitem.findIndex((e)=>e.id === action.payload.id)
            if(state.cartitem[itemindex].cartquantity>=1){
                state.cartitem[itemindex].cartquantity+=1
                localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
                toast.success(`Increase ${action.payload.title} cart quantity`,{
                    position:'bottom-left'
                })
            }
        },
        subtotal:(state,action)=>{
            let {total,quantity}=state.cartitem.reduce((carttotal,cartitem)=>{
                const {price,cartquantity}= cartitem
                const toatlprice=price * cartquantity
                carttotal.total += toatlprice
                carttotal.quantity += cartquantity
                return carttotal
            },{
                total:0,
                quantity:0
            })
            state.carttotalamount=total
            state.carttotalquantity=quantity
        },
        checkout:(state)=>{
            if(state.cartitem.length>0){
            state.cartitem=[]
            localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
            toast.success(` Thanks for buying  `,{
                position:'bottom-left'
            })
        }else{
            toast.error(` First add product  `,{
                position:'bottom-left'
            })
        }
        },
    }
})

export const {loadaddcart,removeaddcart,clearcart,decreasecart,increasecart,subtotal,checkout}=addcartSlice.actions;
export default addcartSlice.reducer;