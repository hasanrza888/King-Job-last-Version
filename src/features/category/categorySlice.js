import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories:[],
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state,{payload}) => {
            state.categories = payload
        }
    },
});

export const {setCategories} = categorySlice.actions;
export default categorySlice.reducer;
