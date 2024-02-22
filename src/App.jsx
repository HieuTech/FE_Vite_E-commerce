import React, { useEffect } from "react";
import RouterLink from "./routes/routes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { categoryAction } from "./store/slices/category.slice";
export default function App() {
  const categoryReducer = useSelector((store) => store.categoryReducer);
  const dispatch = useDispatch();


  return (
    <>
     
      <RouterLink />
    </>
  );
}
