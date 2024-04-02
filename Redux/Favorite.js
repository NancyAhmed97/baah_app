import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteArray:[]
  },
  reducers: {
    addFavoriteMethod: (state, action) => {
  state.favoriteArray =[...state.favoriteArray, action.payload];
 },    
 removeFavoriteMethod: (state, action) => {
  state.favoriteArray = state.favoriteArray.filter(item => item.id !== action.payload);
 },
 },
});

export const { addFavoriteMethod,removeFavoriteMethod } = favoriteSlice.actions;
export default favoriteSlice.reducer;
