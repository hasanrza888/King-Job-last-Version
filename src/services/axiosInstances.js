//hostedEndpoint:https://seal-app-qdwqo.ondigitalocean.app/
//localhostedEndpoint:http://localhost:5000/
import { localapiUrl,deployedapiUrl } from '../constants/constants';
import axios from 'axios';
const instance = axios.create({
    baseURL:deployedapiUrl+'/api',
    withCredentials:true,
});

export default instance;
