import React from 'react';

const ChatSidebar = ({ channels }) => {
  return (
    <div className="chat-sidebar">
      <div className="channels-header">
        <span>Channel</span>
        <button className="add-channel">+</button>
      </div>
      <ul className="channels-list">
        {channels.map(({ id, name, removable }) => (
          <li key={id} className="channel" removable={removable.toString()}>
            # {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
