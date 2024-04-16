import { createSlice } from "@reduxjs/toolkit";

export const vendorAuth = createSlice({
    name: "vendorAuth",
    initialState: {
        vendor: null,
    },
    reducers: {
        setVendor: (state, action) => {
            let vendor = { ...state.vendor, ...action.payload };
            vendor = JSON.stringify(vendor);
            typeof window != 'undefined' && localStorage.setItem("vendor", vendor);
            state.vendor = { ...action.payload };
        },
        login: (state, action) => {
            const vendor = JSON.stringify(action.payload);
            typeof window != 'undefined' && localStorage.setItem("vendor", vendor);
            state.vendor = action.payload;
        },
        logout: (state) => {
            state.vendor = null;
            typeof window != 'undefined' && localStorage.removeItem("vendor");
        },
    },
});

export const { setVendor, login, logout } = vendorAuth.actions;
export default vendorAuth.reducer;