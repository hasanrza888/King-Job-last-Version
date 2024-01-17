import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isLoggedIn:!!localStorage.getItem('user'),
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser : (state,{payload})=>{
            state.user = payload;
            localStorage.setItem('user',JSON.stringify(payload));
            state.isLoggedIn = true
        },
        clearUser : (state,{payload})=>{
            state.user = null;
            localStorage.removeItem('user');
            state.isLoggedIn = false;
        },
    },
});

export const {setUser,clearUser} = authSlice.actions;
export default authSlice.reducer;