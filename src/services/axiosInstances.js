//hostedEndpoint:https://seal-app-qdwqo.ondigitalocean.app/
//localhostedEndpoint:http://localhost:5000/
import axios from 'axios';
const instance = axios.create({
    baseURL:'http://localhost:5000/api',
    withCredentials:true,
});

export default instance;