import { createSlice } from "@reduxjs/toolkit";

export const savedSlice = createSlice({
    name:'savedSlice',
    initialState:[],
    reducers:{
        
        addTosavedItem : (state,action)=>{
            state.push(action.payload)
        }
        
    }
})
export const {addTosavedItem} = savedSlice.actions
export default savedSlice.reducer