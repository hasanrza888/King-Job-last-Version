import axiosInstance from '../axiosInstances';

export const validateUserData = (userData) => {
    return axiosInstance.post('/checkUserAndValidate',userData);
}

export const loginUser = (userData) => {
    return axiosInstance.post('/login',userData);
}

export const loggedin = () => {
    return axiosInstance.get('/loggedin');
}

export const logout = () => {
    return axiosInstance.get('/logout');
}