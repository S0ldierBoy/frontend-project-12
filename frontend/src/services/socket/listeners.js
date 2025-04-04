import socket from './index.js';
import { messageReceived } from '../../features/chat/messageSlice.js';
import {
  channelReceived,
  channelRemoved,
  channelRenamed,
} from '../../features/chat/channelSlice.js';

export const initSocketListeners = (dispatch) => {
  socket.on('newMessage', (msg) => dispatch(messageReceived(msg)));
  socket.on('newChannel', (chn) => dispatch(channelReceived(chn)));
  socket.on('removeChannel', ({ id }) => dispatch(channelRemoved({ id })));
  socket.on('renameChannel', (chn) => dispatch(channelRenamed(chn)));
};
