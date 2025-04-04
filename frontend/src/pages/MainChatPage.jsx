import ChatSidebar from '../features/chat/components/ChatSidebar.jsx';
import ChatContent from '../features/chat/components/ChatContent.jsx';
import StyledChat from '../styles/chatStyleWrapper.js';
import useInitialChatData from '../hooks/useInitialChatData';
import Header from '../layouts/Header.jsx';

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
