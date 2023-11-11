import { createSlice } from "@reduxjs/toolkit";
import {actionMovies,indiaMovies,NewReleases} from '../data'

const initialState = {
    searchTerm : "",
    searchItems:[...actionMovies,...indiaMovies,...NewReleases]
}

const searchSlice = createSlice({
    name:'Search',
    initialState,
    reducers:{
        setSearchTerm:(state,action)=>{
           state.searchTerm = action.payload
        },
        setSearchItems:(state,action) =>{
            state.searchItems = action.payload
        }
    }
})

// console.log(searchSlice)
export const {setSearchTerm,setSearchItems} = searchSlice.actions
export default searchSlice.reducer