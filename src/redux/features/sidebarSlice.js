import { createSlice } from "@reduxjs/toolkit";

export const sidebarAuth = createSlice({
  name: "sidebarAuth",
  initialState: {
    sidebar: true,
  },
  reducers: {
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const { setSidebar } = sidebarAuth.actions;
export default sidebarAuth.reducer;
