import axiosInstance from '../axiosInstances';

export const fetchjobsandsearch = (query) => {
    const r = query === undefined ? '' :query
    return axiosInstance.get('/searchJobsTest'+r);
}
export const getCategories = () => {
    return axiosInstance.get('/categories');
}
export const fetchcompanies = () => {
    return axiosInstance.get('/getcompanyinfos');
}
export const getcompanydetail = (id) => {
    return axiosInstance.get('/company/'+id)
}
//JOB
export const getJobWithId = (id,d) => {
    return axiosInstance.get('/getJobWithId/'+id+`?isViewed=${d}`);
}
export const getjobTypes = () => {
    return axiosInstance.get('/types');
}
export const increaseViews = (id,checker) => {
    return axiosInstance.put('/increaseNumberOfViews/'+id+"/"+checker)
}