import React from 'react';
import StyledChat from '../features/chat/chatWrapper.js';
import { getChannels } from '../api/channelsApi.js.js';

const MainChatPage = () => {
  return (
    <StyledChat>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h1>CodeChat</h1>
          <button className="logout-button" onClick={getChannels}>
            Выйти
          </button>
        </div>

        <div className="chat-main">
          <div className="chat-sidebar">
            <div className="channels-header">
              <span>Каналы</span>
              <button className="add-channel">+</button>
            </div>
            <ul className="channels-list">
              <li className="channel active"># general</li>
              <li className="channel"># random</li>
            </ul>
          </div>

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
        </div>
      </div>
    </StyledChat>
  );
};

export default MainChatPage;
