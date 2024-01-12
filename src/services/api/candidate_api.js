import axiosInstance from '../axiosInstances';

export const registerCandidate = (userData) => {
    return axiosInstance.post('/registerUser',userData);
}