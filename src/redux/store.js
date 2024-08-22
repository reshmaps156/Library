import { configureStore } from "@reduxjs/toolkit";
import { savedSlice } from "./slice/savedSlice";

const store = configureStore({
    reducer:{
        savedReducer:savedSlice
    }
})
export default store