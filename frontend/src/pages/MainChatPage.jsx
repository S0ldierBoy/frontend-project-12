import React from 'react';
import ChatSidebar from '../components/chat/ChatSidebar.jsx';
import ChatContent from '../components/chat/ChatContent.jsx';
import StyledChat from '../features/chat/chatWrapper.js';
import useInitialChatData from '../hooks/useInitialChatData';
import Header from '../components/chat/Header.jsx';

const MainChatPage = () => {
  useInitialChatData();

  return (
    <StyledChat>
      <div className="chat-wrapper">
        <Header />
        <div className="chat-main">
          <ChatSidebar />
          <ChatContent />
        </div>
      </div>
    </StyledChat>
  );
};

export default MainChatPage;
