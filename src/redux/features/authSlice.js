import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            const user = JSON.stringify(action.payload);
            typeof window != 'undefined' && localStorage.setItem("user", user);
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            typeof window != 'undefined' && localStorage.removeItem("user");
        },
    },
});

export const { login, logout, getUser } = auth.actions;
export default auth.reducer;