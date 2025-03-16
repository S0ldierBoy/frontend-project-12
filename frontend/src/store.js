import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice.js';

const store = configureStore({
  auth: authReducer,
});

export default store;
