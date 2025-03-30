import React from 'react';
import { selectAllChannels } from '../features/chat/chatSlice.js';
import ChatSidebar from '../components/chat/ChatSidebar.jsx';
import ChatContent from '../components/chat/ChatContent.jsx';
import StyledChat from '../features/chat/chatWrapper.js';
import useFetchChannels from '../hooks/useFetchChannels';
import { useSelector } from 'react-redux';
import useAuth from '../hooks/useAuth';

const MainChatPage = () => {
  const channels = useSelector(selectAllChannels);
  const { logout } = useAuth();
  useFetchChannels();

  return (
    <StyledChat>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h1>CodeChat</h1>
          <button className="logout-button" onClick={logout}>
            Log out
          </button>
        </div>
        <div className="chat-main">
          <ChatSidebar channels={channels} />
          <ChatContent channels={channels} />
        </div>
      </div>
    </StyledChat>
  );
};

export default MainChatPage;
