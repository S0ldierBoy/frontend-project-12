import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../api/messagesApi.js';

const ChatContent = () => {
  const dispatch = useDispatch(); // Добавьте dispatch
  const channelName = useSelector((state) => state.channels.activeChannelName);
  const channelId = useSelector((state) => state.channels.activeChannelId);
  const username = useSelector((state) => state.auth.user);
  const messages = useSelector((state) => state.messages.messages);
  const [messageText, setMessageText] = useState('');

  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const userData = { body: messageText, channelId, username };
    dispatch(addMessage(userData)); // Используем POST через addMessage
    setMessageText('');
  };

  return (
    <div className="chat-content">
      <div className="chat-title">
        <h2>{channelName}</h2>
        <span>{messages.length} сообщений</span>{' '}
      </div>
      <div className="messages-area">
        {messages.map(({ id, body, username }) => (
          <p key={id}>
            {username}: {body}
          </p>
        ))}
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
