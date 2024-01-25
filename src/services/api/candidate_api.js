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

//APPLYING
export const getuserapplys = () => {
    return axiosInstance.get('/getApplysForEachUser');
}
export const sendapply = (data) => {
    return axiosInstance.post('/postApply',data)
}
//Saved Jobs
export const addjobtosaved = (id) => {
    return axiosInstance.post('/addJobToSaved/'+id);
}
export const getsavedjobs = () => {
    return axiosInstance.get('/getAllUSerSavedJobs');
}

//Messaging
export const getallcontacts = () => {
    return axiosInstance.get('/usermessagers')
}


//Notifications
export const getusernotification = () => {
    return axiosInstance.get('/getusernotifications')
}

//Tasks
export const fetchusertasks = () => {
    return axiosInstance.get('/usertasks')
}

export const fetchtaskquestions = (applyId,folderId) => {
    return axiosInstance.get('/getfolderquestionforapplicant/'+applyId+"/"+folderId);
}

export const checktaskresult = (applyId,folderId,data) => {
    return axiosInstance.post('/checkapplicanttask/'+applyId+"/"+folderId,data);
}