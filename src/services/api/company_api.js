import axios from 'axios';
import axiosInstance from '../axiosInstances';

export const registerCompany = (userData) => {
    return axiosInstance.post('/registerCompany',userData);
}

//COMPANY info

export const updatecompanyinfo = (data) => {
    return axiosInstance.put('/updateCompanyInfo',data);
}


//JOBs
export const addjob = (data) => {
    return axiosInstance.post('/addJob',data)
}

export const getallvacancies = () => {
    return axiosInstance.get('/jobsEachCompany');
}

export const deactivatevacancy = (id) => {
    return axiosInstance.put('/deactivate/'+id)
}


//APPLYERS
export const getallapplyers = () => {
    return axiosInstance.get('/getApplysForEachCompanyOnlyTestLevel')
}
export const getapplystatuses = () => {
    return axiosInstance.get('/applystatuses')
}
export const getapplywithid = (id) => {
    return axiosInstance.get('/apply/'+id);
}


//TASKS
export const getallfolders = () => {
    return axiosInstance.get('/folders');
}
export const creatfolder = (data) => {
    return axiosInstance.post('/creatfolder',data)
}
export const addquestion = (data) => {
    return axiosInstance.post('/creattask',data)
}



//MESSAGING
export const getallcompanycontact = () => {
    return axiosInstance.get('/companymessagers')
}

export const getcurrentchat = (id) => {
    return axiosInstance.get('/chatmessages/'+id)
}
export const sendmessage = (id,data) => {
    return axiosInstance.post('/usersendmessage/'+id,data)
}