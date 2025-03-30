import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getChannels, addChannel, removeChannel } from '../../api/channelsApi.js';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState({
  loading: false,
  activeChannelId: null,
  activeChannelName: null,
  error: null,
});

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setActiveChannelId: (state, action) => {
      state.activeChannelId = action.payload;
    },
    setActiveChannelName: (state, action) => {
      state.activeChannelName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChannels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChannels.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        // Заменяем весь список каналов
        channelsAdapter.setAll(state, action.payload);

        const firstChannel = action.payload[0];
        state.activeChannelId = firstChannel?.id ?? null;
        state.activeChannelName = firstChannel?.name ?? null;
      })
      .addCase(getChannels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action?.error?.message;
      })

      .addCase(addChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addChannel.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        // Добавляем один новый канал
        channelsAdapter.addOne(state, action.payload);

        state.activeChannelId = action.payload.id;
        state.activeChannelName = action.payload.name;
      })
      .addCase(addChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action?.error?.message;
      });
  },
});

// 👉 селекторы
export const {
  selectById: selectChannelById,
  selectAll: selectAllChannels,
  selectEntities: selectChannelEntities,
} = channelsAdapter.getSelectors((state) => state.channels);

// 👉 thunk
export const setActiveChannel = (id) => (dispatch, getState) => {
  const channel = selectChannelById(getState(), id);
  if (channel) {
    dispatch(setActiveChannelId(id));
    dispatch(setActiveChannelName(channel.name));
  }
};

export const { setActiveChannelId, setActiveChannelName } = channelsSlice.actions;
export default channelsSlice.reducer;
