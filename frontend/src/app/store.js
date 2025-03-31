import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice.js';
import channelsReducer from '../features/chat/channelSlice.js';
import messagesReducer from '../features/chat/messageSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    channels: channelsReducer,
    messages: messagesReducer,
  },
});

export default store;
