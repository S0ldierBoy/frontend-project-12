import React, { useState } from 'react';
import {
  setActiveChannelId,
  setActiveChannelName,
} from '../../features/chat/chatSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import AddChannelModal from '../modal/AddChannelModal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatSidebar = ({ channels }) => {
  const activeId = useSelector((state) => state.channels.activeChannelId);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="chat-sidebar">
      <div className="channels-header">
        <span>Channel</span>
        <button className="add-channel" onClick={handleShow}>
          +
        </button>
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
      <AddChannelModal show={show} onClose={handleClose} />
    </div>
  );
};

export default ChatSidebar;
