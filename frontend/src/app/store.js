import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './features/chat/channelSlice.js';
import messagesReducer from './features/chat/messageSlice.js';

export default configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
  },
});
