import { useState } from 'react';
import { selectAllChannels, setActiveChannel } from '../channelSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import AddChannelModal from './AddChannelModal.jsx';
import ChannelDropdown from './ChannelDropdown.jsx';
import { useTranslation } from 'react-i18next';
import censorFilter from '../../../utils/censorFilter.js';

const ChatSidebar = () => {
  const { t } = useTranslation();
  const activeId = useSelector((state) => state.channels.activeChannelId);
  const channels = useSelector(selectAllChannels);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="chat-sidebar">
      <div className="channels-header">
        <span>{t('sidebar.channels')}</span>
        <button className="add-channel" onClick={handleShow}>
          +
        </button>
      </div>
      <ul className="channels-list">
        {channels.map(({ id, name, removable }) => (
          <li key={id}>
            <div
              role="button"
              className={`channel-row channel ${id === activeId ? 'active' : ''}`}
              onClick={() => dispatch(setActiveChannel(id))}
            >
              <span className="channel-name"># {censorFilter(name)}</span>
              {removable && (
                <ChannelDropdown id={id} name={name} channels={channels}>
                  Управление каналом
                </ChannelDropdown>
              )}
            </div>
          </li>
        ))}
      </ul>
      <AddChannelModal show={show} onClose={handleClose} channels={channels} />
    </div>
  );
};

export default ChatSidebar;
