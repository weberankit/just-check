import { createSlice } from "@reduxjs/toolkit";

const DataSlice= createSlice({
    name:"data",
    initialState:{
        item:[]
    }
    ,
    reducers:{
        addItem:(state,action)=>{
         state.item.push(action.payload)
        }
    }
})

export default DataSlice.reducer
export const {addItem} = DataSlice.actions