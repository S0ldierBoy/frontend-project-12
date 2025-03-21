import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getChannels = createAsyncThunk(
  'chat/getChannels',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/v1/channels', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || 'network error');
    }
  }
);

export const addChannel = createAsyncThunk(
  'chat/addChannel',
  async ({ name }, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        '/api/v1/channels',
        { name },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || 'network error');
    }
  }
);

export const editChannel = createAsyncThunk(
  'chat/editChannel',
  async ({ name, id }, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.patch(
        `/api/v1/channels/${id}`,
        { name },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || 'network error');
    }
  }
);

export const removeChannel = createAsyncThunk(
  'chat/removeChannel',
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`/api/v1/channels/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || 'network error');
    }
  }
);
