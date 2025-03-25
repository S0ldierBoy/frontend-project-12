import socket from './index.js';
import { messageReceived } from '../features/chat/messageSlice.js';

export const initSocketListeners = (dispatch) => {
  socket.on('newMessage', (msg) => {
    dispatch(messageReceived(msg));
  });
};
