import { createSlice } from '@reduxjs/toolkit';
import { getChannels } from '../../api/channelsApi.js';

const initialState = {
  channels: [],
  loading: false,
  error: null,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getChannels.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getChannels.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.channels = action.payload;
    });
    builder.addCase(getChannels.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action?.error?.message;
    });
  },
});

export default channelsSlice.reducer;
