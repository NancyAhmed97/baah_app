import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkStatus:false
  },
  reducers: {
  handleMode: (state, action) => {
  state.darkStatus =action.payload;
 },
 },
});

export const { handleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
