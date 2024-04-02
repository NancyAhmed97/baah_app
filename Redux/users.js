import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersArray:[]
  },
  reducers: {
    usersMethod: (state, action) => {
  state.usersArray =action.payload;
 },
 },
});

export const { usersMethod } = usersSlice.actions;
export default usersSlice.reducer;
