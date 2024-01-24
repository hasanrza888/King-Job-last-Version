import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info:{
        achievements:[],
        birthday:"",
        chancesForCoverLetter:0,
        city:"",
        coverletter:"",
        createdAt:"",
        educations:[],
        experiences:[],
        file:"",
        links:[],
        profilepic:"",
        talks:[],
        skills:[],
        updatedAt:"",
        jobTitle:"",
        phone:"",
        currentSalary:"",
        expestedSalary:"",
        experiencesYear:"",
        age:"",
        educationlevelNow:"",
        languages:"",
        
    },
    notifications:[],
    myapplieds:[],
    savedjobs:[],
    numofactivesavedjobs:0,
    contacts:[],
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
    datePost: [
        { id: 1, name: "All", value: "all", isChecked: false },
        { id: 2, name: "Last Hour", value: "last-hour", isChecked: false },
        {
            id: 3,
            name: "Last 24 Hour",
            value: "last-24-hour",
            isChecked: false,
        },
        {
            id: 4,
            name: "Last 7 Days",
            value: "last-7-days",
            isChecked: false,
        },
        {
            id: 5,
            name: "Last 14 Days",
            value: "last-14-days",
            isChecked: false,
        },
        {
            id: 6,
            name: "Last 30 Days",
            value: "last-30-days",
            isChecked: false,
        },
    ],
    experience: [
        { id: 1, name: "Fresh", value: "fresh", isChecked: false },
        { id: 2, name: "1 Year", value: "1-year", isChecked: false },
        { id: 3, name: "2 Year", value: "2-year", isChecked: false },
        { id: 4, name: "3 Year", value: "3-year", isChecked: false },
        {
            id: 5,
            name: "4 Year",
            value: "4-year",
            isChecked: false,
        },
    ],
    qualification: [
        {
            id: 1,
            name: "Certificate",
            value: "certificate",
        },
        {
            id: 2,
            name: "Associate Degree",
            value: "associate-degree",
        },
        {
            id: 3,
            name: "Bachelor Degree",
            value: "bachelor-degree",
        },
        {
            id: 4,
            name: "Master’s Degree",
            value: "master’s-degree",
        },
        {
            id: 5,
            name: "Doctorate Degree",
            value: "doctorate-degree",
        },
    ],
};

export const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        setInfo:(state,{payload}) => {
            state.info = payload;
        },
        addLink:(state,{payload}) => {
            state.info.links = [...state.info.links, payload];
        },
        setLinks:(state,{payload}) => {
            state.info.links = payload;
        },
        addEducation:(state,{payload}) => {
            state.info.educations = [...state.info.educations,payload]
        },
        deleteEducation:(state,{payload}) => {
            const filtered = state.info.educations.filter(educ=>educ._id.toString()!==payload);
            state.info.educations = filtered;
        },
        addExperience:(state,{payload}) => {
            state.info.experiences = [...state.info.experiences,payload]
        },
        deleteExperience:(state,{payload}) => {
            const filtered = state.info.experiences.filter(ex=>ex._id.toString()!==payload);
            state.info.experiences = filtered;
        },
        addAchievement:(state,{payload}) => {
            state.info.achievements = [...state.info.achievements,payload]
        },
        deleteAchievement:(state,{payload}) => {
            const filtered = state.info.achievements.filter(ac=>ac._id.toString()!==payload);
            state.info.achievements = filtered;
        },
        setApplieds:(state,{payload}) => {
            state.myapplieds = payload;
        },
        addAplied:(state,{payload}) => {
            state.myapplieds = [...state.myapplieds,payload]
        },
        setSavedJobs:(state,{payload}) => {
            state.savedjobs = payload;
        },
        addJobToSaved:(state,{payload}) => {
            state.savedjobs = [...state.savedjobs,payload];
        },
        setNumOfActiveSavedJobs:(state,{payload})=>{
            state.numofactivesavedjobs = payload
        },
        deleteJobFromSaved:(state,{payload}) => {
            console.log(payload);
            console.log(state.savedjobs)
            const filtered = state.savedjobs.filter(sv=>sv.job.toString()!==payload);
            state.savedjobs = filtered;
        },
        setContacts:(state,{payload}) => {
            state.contacts = payload;
        },
        updateCandidateContacts:(state,{payload}) => {
            const index = state.contacts.findIndex(
              (contact) => contact._id.toString() === payload._id.toString()
            );
            if (index !== -1) {
              state.contacts = state.contacts.map((contact, i) =>
                i === index ? { ...contact, ...payload } : contact
              );
            }
          },
          increaseNumOfCandidateUnreadMessages: (state, { payload }) => {
            console.log("payload from increasing",payload)
            const index = state.contacts.findIndex(
              (contact) => contact._id.toString() === payload.toString()
            );
          
            if (index !== -1) {
              state.contacts = state.contacts.map((contact, i) =>
                i === index
                  ? {
                      ...contact,
                      unreadMessages: {
                        ...contact.unreadMessages,
                        user: (contact.unreadMessages?.user || 0) + 1,
                        company: 0, // Assuming you want to reset user unread messages to 0
                      },
                    }
                  : contact
              );
            }
            console.log(state.companycontacts)
          },
        setNotifications:(state,{payload})=>{
            state.notifications = payload
        },
        addNotification:(state,{payload}) => {
            state.notifications = [payload,...state.notifications]
        },
        addDatePostCheck: (state, { payload }) => {
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
        clearDatePost: (state, { payload }) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        addExperienceCheck: (state, { payload }) => {
            state?.experience?.map((item) => {
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
        clearExperience: (state, { payload }) => {
            state?.experience?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        addQualificationCheck: (state, { payload }) => {
            state?.qualification?.map((item) => {
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
        clearQualification: (state, { payload }) => {
            state?.qualification?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
    },
});

export const {
    addDatePostCheck,
    addExperienceCheck,
    addQualificationCheck,
    clearDatePost,
    clearExperience,
    clearQualification,
    setInfo,
    addLink,
    setLinks,
    addEducation,
    deleteEducation,
    addExperience,
    deleteExperience,
    addAchievement,
    deleteAchievement,
    setApplieds,
    addAplied,
    setSavedJobs,
    addJobToSaved,
    deleteJobFromSaved,
    setContacts,
    setNumOfActiveSavedJobs,
    addNotification,
    setNotifications,
    updateCandidateContacts,
    increaseNumOfCandidateUnreadMessages
} = candidateSlice.actions;
export default candidateSlice.reducer;
