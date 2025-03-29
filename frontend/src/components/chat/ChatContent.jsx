import React, { useState, useMemo, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../api/messagesApi.js';
import { useAutoScroll } from '../../hooks/useAutoScroll.js';
import { ChatInputFocusContext } from '../../context/ChatInputFocusContext.jsx';

const ChatContent = () => {
  const [messageText, setMessageText] = useState('');
  const dispatch = useDispatch();

  const { activeChannelName: channelName, activeChannelId: channelId } = useSelector(
    (state) => state.channels
  );
  const { messages: messages, loading: loading } = useSelector((state) => state.messages);
  const channelMsg = useMemo(
    () => messages.filter((msg) => msg.channelId === channelId),
    [channelId, messages]
  );

  const username = useSelector((state) => state.auth.user);
  const { inputRef, setFocus } = useContext(ChatInputFocusContext);
  const elementRef = useAutoScroll([channelMsg]);

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
        <span>{channelMsg.length} messages</span>
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
          ref={inputRef}
          type="text"
          className="message-input"
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
          placeholder="Enter your message..."
          autoFocus
        />
        <button type="submit" className="send-button" disabled={loading}>
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatContent;
