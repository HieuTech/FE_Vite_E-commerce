import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const findAll = createAsyncThunk("category/findAll",async () => {
  const res = await axios.get("http://localhost:3000/categories");
  return res.data;
});

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  reducers: {
    showData: (state, action) => {
      state.data = action.payload;
    },
  },

  extraReducers:(builder)=>{
    builder.addCase(findAll.fulfilled,(state,action)=>{
        state.data = action.payload
    });
  }
});


export const categoryReducer = categorySlice.reducer;
export const categoryAction = {
  ...categorySlice.actions,
  findAll,
};
