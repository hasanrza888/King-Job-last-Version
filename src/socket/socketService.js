import { io } from 'socket.io-client';
import { localapiUrl,deployedapiUrl } from '../constants/constants';
const socket = io(localapiUrl);

export default socket;
