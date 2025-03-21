import React, { useEffect } from 'react';
import StyledChat from '../features/chat/chatWrapper.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice.js';
import { getChannels } from '../api/channelsApi.js';

const MainChatPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const channels = useSelector((state) => state.channels.channels);
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  useEffect(() => {
    if (token) {
      dispatch(getChannels());
    }
  }, [token]);

  return (
    <StyledChat>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h1>CodeChat</h1>
          <button className="logout-button" onClick={handleLogout}>
            Log out
          </button>
        </div>

        <div className="chat-main">
          <div className="chat-sidebar">
            <div className="channels-header">
              <span>Channel</span>
              <button className="add-channel">+</button>
            </div>
            <ul className="channels-list">
              {channels.map(({ id, name, removable }) => (
                <li key={id} className="channel" removable={removable}>
                  # {name}
                </li>
              ))}
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
