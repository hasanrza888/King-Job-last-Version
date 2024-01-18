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