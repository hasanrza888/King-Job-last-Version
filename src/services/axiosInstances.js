import axios from 'axios';
const instance = axios.create({
    baseURL:'https://seal-app-qdwqo.ondigitalocean.app/api',
    withCredentials:true,
});

export default instance;