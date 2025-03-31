import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../api/messagesApi.js';
import { ChatInputFocusContext } from '../../context/ChatInputFocusContext.jsx';
import { useAutoScroll } from '../../hooks/useAutoScroll.js';
import useChannelMessages from '../../hooks/useChannelMessages.js';

const ChatContent = () => {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');

  const { activeChannelName: channelName, activeChannelId: channelId } = useSelector(
    (state) => state.channels
  );
  const isLoading = useSelector((state) => state.messages.loading);
  const username = useSelector((state) => state.auth.user);
  const channelMessages = useChannelMessages(channelId);

  const { scrollRef, setFocus } = useContext(ChatInputFocusContext);
  const elementRef = useAutoScroll([channelMessages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    dispatch(addMessage({ body: messageText, channelId, username }));
    setMessageText('');
    setFocus();
  };

  return (
    <div className="chat-content">
      <div className="chat-title">
        <h2># {channelName}</h2>
        <span>{channelMessages.length} messages</span>
      </div>

      <div className="messages-area">
        {channelMessages.map(({ id, body, username }) => (
          <p key={id}>
            {username}: {body}
          </p>
        ))}
        <div ref={elementRef}></div>
      </div>

      <form className="message-form" onSubmit={handleSubmit}>
        <input
          ref={scrollRef}
          type="text"
          className="message-input"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Enter your message..."
          autoFocus
        />
        <button type="submit" className="send-button" disabled={isLoading}>
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatContent;
