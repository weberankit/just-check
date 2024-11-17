import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./dataSlice";
const appStore=configureStore({
    reducer:{
    DataSliced:DataSlice
    }
})
export default appStore