import React, { useState } from 'react';
import { selectAllChannels, setActiveChannel } from '../../features/chat/channelSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import AddChannelModal from '../modal/AddChannelModal.jsx';
import ChannelDropdown from './ChannelDropdown.jsx';

const ChatSidebar = () => {
  const activeId = useSelector((state) => state.channels.activeChannelId);
  const channels = useSelector(selectAllChannels);
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
          <li key={id}>
            <div
              className={`channel-row channel ${id === activeId ? 'active' : ''}`}
              onClick={() => dispatch(setActiveChannel(id))}
            >
              <span># {name}</span>
              {removable && <ChannelDropdown id={id} name={name} channels={channels} />}
            </div>
          </li>
        ))}
      </ul>
      <AddChannelModal show={show} onClose={handleClose} channels={channels} />
    </div>
  );
};

export default ChatSidebar;
