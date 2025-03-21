import { useSelector, useDispatch } from 'react-redux';
import { getChannels } from '../api/channelsApi.js';
import { useEffect } from 'react';

const useFetchChannels = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(getChannels());
    }
  }, [token]);
};

export default useFetchChannels;
