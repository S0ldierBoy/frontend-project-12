import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectAllChannels, setActiveChannel } from '../channelSlice.js';
import AddChannelModal from './AddChannelModal.jsx';
import ChannelDropdown from './ChannelDropdown.jsx';
import censorFilter from '../../../../utils/censorFilter.js';

const ChatSidebar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channels = useSelector(selectAllChannels);
  const activeId = useSelector((state) => state.channels.activeChannelId);

  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="chat-sidebar">
      <div className="channels-header">
        <span>{t('sidebar.channels')}</span>
        <button className="add-channel" onClick={() => setShowAdd(true)}>
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
              {removable && <ChannelDropdown channelId={id} />}
            </div>
          </li>
        ))}
      </ul>

      <AddChannelModal show={showAdd} onClose={() => setShowAdd(false)} />
    </div>
  );
};

export default ChatSidebar;
