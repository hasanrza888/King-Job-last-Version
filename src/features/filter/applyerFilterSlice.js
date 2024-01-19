import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applyerlist: {
        keyword: "",
        location: "",
        category: "",
        jobType: [],
        jobTypeSelect: "",
        datePosted: "",
        experience: [],
        experienceSelect: "",
        tag: "",
        status:"",
        jobName:"",
        percentageOfCv:{
            min:0,
            max:0
        },
    },
    applyerSort: {
        sort: "",
        perPage: {
            start: 0,
            end: 10,
        },
    },
};

export const applyerFilterSlice = createSlice({
    name: "applyerfilter",
    initialState,
    reducers: {
        addKeyword: (state, { payload }) => {
            state.jobList.keyword = payload;
        },
        addLocation: (state, { payload }) => {
            state.jobList.location = payload;
        },
        addDestination: (state, { payload }) => {
            state.jobList.destination.min = payload.min;
            state.jobList.destination.max = payload.max;
        },
        addCategory: (state, { payload }) => {
            state.jobList.category = payload;
        },
        addJobType: (state, { payload }) => {
            const isExist = state.jobList.jobType.includes(payload);
            if (!isExist) {
                state.jobList.jobType.push(payload);
            } else {
                state.jobList.jobType = state.jobList.jobType.filter(
                    (item) => item !== payload
                );
            }
        },
        clearJobType: (state) => {
            state.jobList.jobType = [];
        },
        addJobTypeSelect: (state, { payload }) => {
            state.jobList.jobTypeSelect = payload;
        },
        addDatePosted: (state, { payload }) => {
            state.jobList.datePosted = payload;
        },
        addExperience: (state, { payload }) => {
            const isExist = state.jobList.experience.includes(payload);
            if (!isExist) {
                state.jobList.experience.push(payload);
            } else {
                state.jobList.experience = state.jobList.experience.filter(
                    (item) => item !== payload
                );
            }
        },
        addExperienceSelect: (state, { payload }) => {
            state.jobList.experienceSelect = payload;
        },
        clearExperience: (state) => {
            state.jobList.experience = [];
        },
        addSalary: (state, { payload }) => {
            state.jobList.salary.min = payload.min;
            state.jobList.salary.max = payload.max;
        },
        addStatus:(state,{payload})=>{
            state.applyerlist.status = payload;
        },
        addJobName:(state,{payload})=>{
            state.applyerlist.jobName = payload;
        },
        addSort: (state, { payload }) => {
            state.jobSort.sort = payload;
        },
        addTag: (state, { payload }) => {
            state.jobList.tag = payload;
        },
        addPerPage: (state, { payload }) => {
            state.applyerSort.perPage.start = payload.start;
            state.applyerSort.perPage.end = payload.end;
        },
        addPercentageOfCv: (state, { payload }) => {
            state.applyerlist.percentageOfCv.min = payload.min;
            state.applyerlist.percentageOfCv.max = payload.max;
        },
    },
});

export const {
    addKeyword,
    addLocation,
    addDestination,
    addCategory,
    addJobType,
    clearJobType,
    addJobTypeSelect,
    addDatePosted,
    addExperience,
    addExperienceSelect,
    clearExperience,
    addSalary,
    addTag,
    addSort,
    addPerPage,
    addStatus,
    addJobName,
    addPercentageOfCv
} = applyerFilterSlice.actions;
export default applyerFilterSlice.reducer;
