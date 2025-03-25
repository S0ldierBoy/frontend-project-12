import React from 'react';
import { setActiveChannelId, setActiveChannelName } from '../../features/chat/chatSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const ChatSidebar = ({ channels }) => {
  const activeId = useSelector((state) => state.channels.activeChannelId);
  const dispatch = useDispatch();

  return (
    <div className="chat-sidebar">
      <div className="channels-header">
        <span>Channel</span>
        <button className="add-channel">+</button>
      </div>

      <ul className="channels-list">
        {channels.map(({ id, name, removable }) => (
          <li
            key={id}
            className={`channel ${id === activeId ? 'active' : ''}`}
            removable={removable.toString()}
            onClick={() => {
              dispatch(setActiveChannelId(id)), dispatch(setActiveChannelName(name));
            }}
          >
            # {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
