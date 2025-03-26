import React, { useState } from 'react';
import { setActiveChannel } from '../../features/chat/chatSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import AddChannelModal from '../modal/AddChannelModal.jsx';

const ChatSidebar = ({ channels }) => {
  const activeId = useSelector((state) => state.channels.activeChannelId);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="chat-sidebar">
      <div className="channels-header">
        <span>Channels :</span>
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
            onClick={() => dispatch(setActiveChannel(id))}
          >
            # {name}
          </li>
        ))}
      </ul>
      <AddChannelModal show={show} onClose={handleClose} channels={channels} />
    </div>
  );
};

export default ChatSidebar;
