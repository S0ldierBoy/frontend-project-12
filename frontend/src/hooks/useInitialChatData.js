import { useSelector, useDispatch } from 'react-redux';
import { getChannels } from '../services/api/channelsApi.js';
import { getMessages } from '../services/api/messagesApi.js';
import { useEffect } from 'react';

const useInitialChatData = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(getChannels());
      dispatch(getMessages());
    }
  }, [token]);
};

export default useInitialChatData;
