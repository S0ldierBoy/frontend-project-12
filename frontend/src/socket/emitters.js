import socket from './index.js';

export const emitMessage = (data) => {
  console.log('Отправка сообщения:', data);
  socket.emit('newMessage', data);
};
