import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../api/messagesApi.js';
import { useAutoScroll } from '../../hooks/useAutoScroll.js';

const ChatContent = () => {
  const [messageText, setMessageText] = useState('');
  const dispatch = useDispatch();

  const { activeChannelName: channelName, activeChannelId: channelId } = useSelector(
    (state) => state.channels
  );
  const {
    messages: messages,
    loading: loading,
    error: error,
  } = useSelector((state) => state.messages);
  const channelMsg = useMemo(
    () => messages.filter((msg) => msg.channelId === channelId),
    [channelId, messages]
  );

  const username = useSelector((state) => state.auth.user);
  const elementRef = useAutoScroll([channelMsg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    dispatch(addMessage({ body: messageText, channelId, username }));
    setMessageText('');
  };

  return (
    <div className="chat-content">
      <div className="chat-title">
        <h2># {channelName}</h2>
        <span>{channelMsg.length} messages</span>
        {loading && <p>Sending...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>

      <div className="messages-area">
        {channelMsg.map(({ id, body, username }) => (
          <p key={id}>
            {username}: {body}
          </p>
        ))}
        <div ref={elementRef}></div>
      </div>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="message-input"
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
          placeholder="Enter your message..."
        />
        <button type="submit" className="send-button" disabled={loading}>
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatContent;
