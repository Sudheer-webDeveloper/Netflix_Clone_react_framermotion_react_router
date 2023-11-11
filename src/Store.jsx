import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './featuresSlice/searchSlice'

export const store = configureStore({
    reducer:{
        search: searchReducer
    }
})


export default store