import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messagesArray:[]
  },
  reducers: {
    messagesMethod: (state, action) => {
  state.messagesArray =action.payload;
 },
 },
});

export const { messagesMethod } = messagesSlice.actions;
export default messagesSlice.reducer;
