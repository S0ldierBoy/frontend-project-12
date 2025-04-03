import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleError } from './apiHelpers.js';
import axios from 'axios';

export const signupUser = createAsyncThunk(
  'auth/signup',
  async ({ name, password }, thunkAPI) => {
    try {
      const response = await axios.post('/api/v1/signup', {
        username: name,
        password: password,
      });
      const { token, username } = response.data;
      console.log(response.data);
      console.log(token);
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      return response.data;
    } catch (err) {
      return handleError(err, thunkAPI);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ name, password }, thunkAPI) => {
    try {
      const response = await axios.post('/api/v1/login', {
        username: name,
        password: password,
      });
      const { token, username } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      return response.data;
    } catch (err) {
      return handleError(err, thunkAPI);
    }
  }
);
