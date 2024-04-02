import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userArray:{}
  },
  reducers: {
    userMethod: (state, action) => {
  state.userArray =action.payload;
 },
 },
});

export const { userMethod } = userSlice.actions;
export default userSlice.reducer;
