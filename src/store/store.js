import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../features/job/jobSlice";
import toggleSlice from "../features/toggle/toggleSlice";
import filterSlice from "../features/filter/filterSlice";
import employerSlice from "../features/employer/employerSlice";
import employerFilterSlice from "../features/filter/employerFilterSlice";
import candidateSlice from "../features/candidate/candidateSlice";
import candidateFilterSlice from "../features/filter/candidateFilterSlice";
import shopSlice from "../features/shop/shopSlice";
import categorySlice from "../features/category/categorySlice";
import jobtypeSlice from "../features/jobtypes/jobtypeSlice"
import loadingSlice from "../features/loading/loadingSlice";
import authSlice from "../features/auth/authSlice";
import applyerFilterSlice from "../features/filter/applyerFilterSlice";
import taskSlice from "../features/task/taskSlice";
import questionSlice from "../features/question/questionSlice";
import messageSlice from "../features/message/messageSlice";
import socketSlice from "../features/socket/socketSlice";
export const store = configureStore({
    reducer: {
        job: jobSlice,
        toggle: toggleSlice,
        filter: filterSlice,
        employer: employerSlice,
        employerFilter: employerFilterSlice,
        candidate: candidateSlice,
        candidateFilter: candidateFilterSlice,
        shop: shopSlice,
        category:categorySlice,
        jobtype:jobtypeSlice,
        loading:loadingSlice,
        auth:authSlice,
        applyerfilter:applyerFilterSlice,
        task:taskSlice,
        question:questionSlice,
        message:messageSlice,
        socket:socketSlice
    }
});
