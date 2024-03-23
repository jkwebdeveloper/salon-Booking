import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: "auth",
    initialState: {
        user: typeof window != 'undefined' && JSON.parse(localStorage.getItem("user")) || null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            const user = JSON.stringify(action.payload);
            typeof window != 'undefined' && localStorage.setItem("user", user);
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = auth.actions;
export default auth.reducer;