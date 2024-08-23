import { configureStore } from "@reduxjs/toolkit";
import savedBookSlice from "./slice/savedBookSlice";

 const store = configureStore({
    reducer:{
        savedReducer:savedBookSlice
    }
})

export default store