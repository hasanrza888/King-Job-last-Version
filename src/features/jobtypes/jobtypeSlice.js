import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobtypes:[],
};

export const jobtypeSlice = createSlice({
    name: "jobtype",
    initialState,
    reducers: {
        setJobtypes: (state,{payload}) => {
            state.jobtypes = payload
        }
    },
});

export const {setJobtypes} = jobtypeSlice.actions;
export default jobtypeSlice.reducer;
