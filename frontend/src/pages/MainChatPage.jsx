import React from 'react';
import { selectAllChannels } from '../features/chat/channelSlice.js';
import ChatSidebar from '../components/chat/ChatSidebar.jsx';
import ChatContent from '../components/chat/ChatContent.jsx';
import StyledChat from '../features/chat/chatWrapper.js';
import useInitialChatData from '../hooks/useInitialChatData';
import useAuth from '../hooks/useAuth';

const MainChatPage = () => {
  const { logout } = useAuth();
  useInitialChatData();

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
          <ChatSidebar />
          <ChatContent />
        </div>
      </div>
    </StyledChat>
  );
};

export default MainChatPage;
