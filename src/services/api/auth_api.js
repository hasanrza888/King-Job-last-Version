import axiosInstance from '../axiosInstances';

export const validateUserData = (userData) => {
    return axiosInstance.post('/checkUserAndValidate',userData);
}