import { createSlice } from '@reduxjs/toolkit';
import { loginUser, signupUser } from '../../services/api/authApi.js';

const initialState = {
  user: localStorage.getItem('username') || null,
  token: localStorage.getItem('token') || null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
  },
  extraReducers: (builder) => {
    [loginUser, signupUser].forEach((thunk) => {
      builder
        .addCase(thunk.pending, (state) => {
          state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.user = action.payload.username;
          state.token = action.payload.token;
          state.error = null;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.error = action.payload || action?.error?.message;
        });
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
