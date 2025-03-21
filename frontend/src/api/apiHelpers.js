export const getAuthHeader = () => {
  return {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
};

export const handleError = (err, thunkAPI) => {
  return thunkAPI.rejectWithValue(err.response?.data || 'network error');
};
