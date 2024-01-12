import axiosInstance from '../axiosInstances';

export const fetchjobsandsearch = (query) => {
    const r = query === undefined ? '' :query
    return axiosInstance.get('/searchJobsTest'+r);
}