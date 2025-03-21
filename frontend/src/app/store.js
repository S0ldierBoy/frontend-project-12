import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice.js';
import channelsReducer from '../features/chat/chatSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    channels: channelsReducer,
  },
});

export default store;
