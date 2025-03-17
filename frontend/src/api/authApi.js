import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, password }, thunkAPI) => {
    try {
      const response = await axios.post('/api/v1/signup', {
        username: name,
        password: password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || 'network error');
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
      const { token } = response.data;
      localStorage.setItem('token', token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || 'network error');
    }
  }
);
