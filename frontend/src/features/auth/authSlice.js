import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../api/authApi.js';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
