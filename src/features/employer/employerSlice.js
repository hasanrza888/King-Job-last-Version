import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyInfo: {
    applynum: 0,
    info: "",
    createdAt: "",
    isBlock: false,
    levelofapplyers: [],
    logo: "",
    numberOfJobSharing: 0,
    subscription: "",
    vacancynum: 0,
    workers: [],
    categories: [],
    phone: "",
    website: "",
  },
  vacancies: [],
  companycontacts:[],
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
  notifications:[],
  companySize: [],
  allCompanies: [],
  allapplyers:[],
  applystatuses:[]
};

export const employerSlice = createSlice({
  name: "employer",
  initialState,
  reducers: {
    setCompanies: (state, { payload }) => {
      state.allCompanies = payload;
    },
    setCompanyInfo: (state, { payload }) => {
      state.companyInfo = payload;
    },
    setVacancies: (state, { payload }) => {
      state.vacancies = payload;
    },
    addVacancy: (state, { payload }) => {
      state.vacancies = [...state.vacancies, payload];
    },
    updateVacancy: (state, { payload }) => {
      const index = state.vacancies.findIndex(
        (vacancy) => vacancy._id.toString() === payload._id.toString()
      );
      if (index !== -1) {
        state.vacancies = state.vacancies.map((vacancy, i) =>
          i === index ? { ...vacancy, ...payload } : vacancy
        );
      }
    },
    setApplyers:(state,{payload}) => {
        state.allapplyers = payload;
    },
    updateApplyer:(state,{payload}) => {
        const index = state.allapplyers.findIndex(
            (applyer) => applyer._id.toString() === payload._id.toString()
          );
          if (index !== -1) {
            state.allapplyers = state.allapplyers.map((applyer, i) =>
              i === index ? { ...applyer, ...payload } : applyer
            );
          }
    },
    setApplyStatuses:(state,{payload})=>{
        state.applystatuses = payload;
    },
    setCompanyContacts:(state,{payload}) => {
      state.companycontacts = payload;
    },
    updateCompanyContacts:(state,{payload}) => {
      const index = state.companycontacts.findIndex(
        (contact) => contact._id.toString() === payload._id.toString()
      );
      if (index !== -1) {
        state.companycontacts = state.companycontacts.map((contact, i) =>
          i === index ? { ...contact, ...payload } : contact
        );
      }
    },
    increaseNumOfCompanyUnreadMessages: (state, { payload }) => {
      console.log("payload from increasing",payload)
      const index = state.companycontacts.findIndex(
        (contact) => contact._id.toString() === payload.toString()
      );
    
      if (index !== -1) {
        state.companycontacts = state.companycontacts.map((contact, i) =>
          i === index
            ? {
                ...contact,
                unreadMessages: {
                  ...contact.unreadMessages,
                  company: (contact.unreadMessages?.company || 0) + 1,
                  user: 0, // Assuming you want to reset user unread messages to 0
                },
              }
            : contact
        );
      }
      console.log(state.companycontacts)
    },
    setNotificationsForCompany:(state,{payload}) => {
      state.notifications = payload;
    },
    addNotificationForCompany:(state,{payload}) => {
      state.notifications = [payload,...state.notifications]
    }
  },
});

export const { setCompanies, setCompanyInfo, setVacancies, addVacancy,updateVacancy,setApplyers,updateApplyer,setApplyStatuses,setCompanyContacts,updateCompanyContacts,increaseNumOfCompanyUnreadMessages,setNotificationsForCompany,addNotificationForCompany } =
  employerSlice.actions;
export default employerSlice.reducer;
