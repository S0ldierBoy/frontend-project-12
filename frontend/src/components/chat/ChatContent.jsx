import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../api/messagesApi.js';

const ChatContent = () => {
  const channelName = useSelector((state) => state.channels.activeChannelName);
  const channelId = useSelector((state) => state.channels.activeChannelId);
  const userName = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');

  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const userData = { body: messageText, channelId, username: userName };
    dispatch(addMessage(userData));
    setMessageText('');
  };

  return (
    <div className="chat-content">
      <div className="chat-title">
        <h2>{channelName}</h2>
        <span>0 сообщений</span>
      </div>

      <div className="messages-area">
        {userName}: {messageText}
      </div>

      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="message-input"
          onChange={handleChange}
          value={messageText}
          placeholder="Enter your message..."
        />
        <button type="submit" className="send-button">
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatContent;
