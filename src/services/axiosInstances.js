import { localapiUrl,deployedapiUrl } from '../constants/constants';
import axios from 'axios';
const instance = axios.create({
    baseURL:deployedapiUrl+'/api',
    withCredentials:true,
});

export default instance;
