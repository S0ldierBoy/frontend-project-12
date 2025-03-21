import React from 'react';

const ChatContent = ({ props }) => {
  return (
    <div className="chat-content">
      <div className="chat-title">
        <h2># general</h2>
        <span>0 сообщений</span>
      </div>

      <div className="messages-area">{/* Сообщения */}</div>

      <form className="message-form">
        <input
          type="text"
          className="message-input"
          placeholder="Введите сообщение..."
        />
        <button type="submit" className="send-button">
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatContent;
