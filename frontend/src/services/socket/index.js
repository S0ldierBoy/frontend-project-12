import { io } from 'socket.io-client';

let socket = null;

function initSocket() {
  if (!socket) {
    socket = io('/');
  }
  return socket;
}

export default initSocket;
