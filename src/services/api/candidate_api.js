import axiosInstance from '../axiosInstances';

export const registerCandidate = (userData) => {
    return axiosInstance.post('/registerUser',userData);
}


//Candidate profile and carier info services
export const addLinks = (data) => {
    return axiosInstance.post('/addlinks',data)
}

export const updatecarieerinfo = (data) => {
    return axiosInstance.put('/updatecarier',data)
}

export const updateprofilepic = (data) => {
    return axiosInstance.put('/updateprofilephoto',data)
}

export const deleteeducation = (id) => {
    return axiosInstance.delete('/deleteeducation/'+id)
}

export const addeducation = (data) => {
    return axiosInstance.post('/addeducations',data)
}

export const addexperience = (data) => {
    return axiosInstance.post('/addexperience',data);
}
export const deleteexperience = (id) => {
    return axiosInstance.delete('/deleteexperience/'+id);
}
export const addachievement = (data) => {
    return axiosInstance.post('/addachievement',data);
}
export const deleteachievement = (id) => {
    return axiosInstance.delete('/deleteachievement/'+id);
}