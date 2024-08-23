import { createSlice } from "@reduxjs/toolkit";


export const savedBookSlice = createSlice({
    name:'savedBookSlice',
    initialState:[],
    reducers:{
        addToSaved:(state,actions)=>{
            const bookExists = state.find(book => book._id === actions.payload._id);
            if(!bookExists){
                state.push(actions.payload)
            }
            
        },  
        removeFromSaved:()=>{

        }
    }
})

export const {addToSaved,removeFromSaved} = savedBookSlice.actions
export default savedBookSlice.reducer