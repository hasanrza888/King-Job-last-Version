import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alljobs:[],
    latestJob: ["full-time"],
    currentJob:null,
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
    jobTypeList: [
        {
            id: 1,
            name: "Freelancer",
            value: "freelancer",
            isChecked: false,
        },
        {
            id: 2,
            name: "Full Time",
            value: "full-time",
            isChecked: false,
        },
        {
            id: 3,
            name: "Part Time",
            value: "part-time",
            isChecked: false,
        },
        {
            id: 4,
            name: "Temporary",
            value: "temporary",
            isChecked: false,
        },
    ],
    datePost: [
        { id: 1, name: "Tarix", value: "all", isChecked: false },
        { id: 2, name: "Son saat", value: "last-hour", isChecked: false },
        {
            id: 3,
            name: "Last 24 Hour",
            value: "last-24-hour",
            isChecked: false,
        },
        { id: 4, name: "Son 7 gun", value: "last-7-days", isChecked: false },
        {
            id: 5,
            name: "Son 14 gün",
            value: "last-14-days",
            isChecked: false,
        },
        {
            id: 6,
            name: "Son 30 gün",
            value: "last-30-days",
            isChecked: false,
        },
    ],
    experienceLavel: [
        { id: 1, name: "Təcrübəsiz", value: "Təcrübəsiz", isChecked: false },
        { id: 2, name: "Minimum 1 il", value: "Minimum 1 il", isChecked: false },
        { id: 3, name: "Minimum 2 il", value: "Minimum 2 il", isChecked: false },
        { id: 4, name: "Minimum 3 il", value: "Minimum 3 il", isChecked: false },
        {
            id: 5,
            name: "Minimum 4 il",
            value: "Minimum 4 il",
            isChecked: false,
        },
        {
            id: 6,
            name: "Minimum 5 il",
            value: "Minimum 5 il",
            isChecked: false,
        },
        {
            id: 7,
            name: "Minimum 6 il",
            value: "Minimum 6 il",
            isChecked: false,
        },
        {
            id: 8,
            name: "Minimum 7 il",
            value: "Minimum 7 il",
            isChecked: false,
        },
        {
            id: 9,
            name: "7 il +",
            value: "7 il +",
            isChecked: false,
        },
    ],
    tags: [
        {
            id: 1,
            name: "App",
            value: "app",
        },
        {
            id: 2,
            name: "Administrative",
            value: "administrative",
        },
        {
            id: 3,
            name: "Android",
            value: "android",
        },
        {
            id: 4,
            name: "Wordpress",
            value: "wordpress",
        },
        {
            id: 5,
            name: "Design",
            value: "design",
        },
        {
            id: 6,
            name: "React",
            value: "react",
        },
    ],
};

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setJobs : (state, {payload}) => {
            state.alljobs = payload;
        },
        setCurrentJob:(state,{payload}) => {
            state.currentJob = payload;
        },
        addLatestJob: (state, { payload }) => {
            const isExist = state.latestJob?.includes(payload);
            if (isExist) {
                state.latestJob = state.latestJob.filter(
                    (item) => item !== payload
                );
            } else {
                state.latestJob.push(payload);
            }
        },
        clearJobTypeToggle: (state) => {
            state?.jobTypeList?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        jobTypeCheck: (state, { payload }) => {
            state?.jobTypeList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false;
                    } else {
                        item.isChecked = true;
                    }
                }
                return {
                    ...item,
                };
            });
        },
        datePostCheck: (state, { payload }) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                if (item.id === payload) {
                    item.isChecked = true;
                }
                return {
                    ...item,
                };
            });
        },
        clearDatePostToggle: (state) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        experienceLavelCheck: (state, { payload }) => {
            state?.experienceLavel?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false;
                    } else {
                        item.isChecked = true;
                    }
                }
                return {
                    ...item,
                };
            });
        },
        clearExperienceToggle: (state) => {
            state?.experienceLavel?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
    },
});

export const {
    addLatestJob,
    clearJobTypeToggle,
    jobTypeCheck,
    datePostCheck,
    clearDatePostToggle,
    experienceLavelCheck,
    clearExperienceToggle,
    setJobs,
    setCurrentJob
} = jobSlice.actions;
export default jobSlice.reducer;
