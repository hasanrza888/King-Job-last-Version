import { io } from 'socket.io-client';
import { localapiUrl,deployedapiUrl } from '../constants/constants';
const socket = io(deployedapiUrl);

export default socket;
