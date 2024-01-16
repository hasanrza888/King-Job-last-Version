import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companyInfo:{
        applynum:0,
        info:"",
        createdAt:"",
        isBlock:false,
        levelofapplyers:[],
        logo:"",
        numberOfJobSharing:0,
        originHistory:"",
        subscription:"",
        vacancynum:0,
        workers:[]
    },
    category: [
        {
            id: 1,
            name: "Residential",
            value: "residential",
        },
        {
            id: 2,
            name: "Commercial",
            value: "commercial",
        },
        {
            id: 3,
            name: "Industrial",
            value: "industrial",
        },
        {
            id: 4,
            name: "Apartments",
            value: "apartments",
        },
    ],
    companySize: [],
    allCompanies:[],
};

export const employerSlice = createSlice({
    name: "employer",
    initialState,
    reducers: {
        setCompanies: (state,{payload}) => {
            state.allCompanies = payload
        },
        setCompanyInfo: (state,{payload}) => {
            state.companyInfo = payload
        }
    },
});

export const {setCompanies,setCompanyInfo} = employerSlice.actions;
export default employerSlice.reducer;
