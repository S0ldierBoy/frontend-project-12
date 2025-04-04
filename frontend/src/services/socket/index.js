import { io } from 'socket.io-client';

const socket = io('/');
// socket.on('connect', () => console.log('Соединение с сервером установлено'));
// socket.on('connect_error', (err) => console.log('Ошибка подключения:', err));
export default socket;
