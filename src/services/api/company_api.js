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