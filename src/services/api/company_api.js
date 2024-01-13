import axiosInstance from '../axiosInstances';

export const registerCompany = (userData) => {
    return axiosInstance.post('/registerCompany',userData);
}