import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:"",
    phone:"",
    address:"",
    error:{},
    bank:""
}

export const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        setName:(state,action)=>{
            state.name = action.payload;
        },
        setPhone:(state,action)=>{
            state.phone = action.payload;

        },
        setAddress:(state,action)=>{
            state.address = action.payload;
        },
        setBank:(state,action)=>{
            state.bank = action.payload;
        },
        setError:(state,action)=>{
            state.error = action.payload;
        }
    }
});

export const {setName,setAddress,setBank,setError,setPhone} = orderSlice.actions;

export default orderSlice.reducer;