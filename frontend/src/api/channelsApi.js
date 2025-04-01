import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthHeader, handleError } from './apiHelpers.js';
import {
  selectMessagesByChannel,
  removeMessages,
} from '../features/chat/messageSlice.js';
import axios from 'axios';

export const getChannels = createAsyncThunk('chat/getChannels', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/v1/channels', getAuthHeader());
    return response.data;
  } catch (err) {
    return handleError(err, thunkAPI);
  }
});

export const addChannel = createAsyncThunk(
  'chat/addChannel',
  async ({ name }, thunkAPI) => {
    try {
      const response = await axios.post('/api/v1/channels', { name }, getAuthHeader());
      return response.data;
    } catch (err) {
      return handleError(err, thunkAPI);
    }
  }
);

export const renameChannel = createAsyncThunk(
  'chat/editChannel',
  async ({ name, id }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/v1/channels/${id}`,
        { name },
        getAuthHeader()
      );
      return response.data;
    } catch (err) {
      return handleError(err, thunkAPI);
    }
  }
);

export const removeChannel = createAsyncThunk(
  'chat/removeChannel',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/v1/channels/${id}`, getAuthHeader());
      const state = thunkAPI.getState();

      const messageIds = selectMessagesByChannel(id)(state).map((msg) => msg.id);
      thunkAPI.dispatch(removeMessages(messageIds));

      return response.data;
    } catch (err) {
      return handleError(err, thunkAPI);
    }
  }
);
