import socket from './index.js';

export const emitMessage = (data) => {
  socket.emit('newMessage', data);
};
