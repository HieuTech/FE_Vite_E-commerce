import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            
        }
    }
})

export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;