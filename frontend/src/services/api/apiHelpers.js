export const getAuthHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export const handleError = (err, thunkAPI) =>
  thunkAPI.rejectWithValue(err.response?.data || 'network error');
