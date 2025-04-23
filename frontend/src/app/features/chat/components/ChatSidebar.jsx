import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectAllChannels, setActiveChannel } from '../channelSlice.js';
import ChannelDropdown from './ChannelDropdown.jsx';
import censorFilter from '../../../../utils/censorFilter.js';
import { openModal } from '../../ui/modalSlice.js';

const ChatSidebar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const channels = useSelector(selectAllChannels);
  const activeId = useSelector((s) => s.channels.activeChannelId);

  const handleAddChannel = () => dispatch(openModal({ type: 'addChannel' }));

  return (
    <div className="chat-sidebar">
      <div className="channels-header">
        <span>{t('sidebar.channels')}</span>
        <button
          className="add-channel"
          onClick={handleAddChannel}
          aria-label={t('sidebar.addChannel')}
        >
          +
        </button>
      </div>

      <ul className="channels-list">
        {channels.map(({ id, name, removable }) => (
          <li key={id}>
            <div
              role="button"
              className={`channel-row channel ${id === activeId ? 'active' : ''}`}
              onClick={(e) => {
                if (e.target.closest('.dropdown')) return;
                dispatch(setActiveChannel(id));
              }}
            >
              <span className="channel-name">
                #
                {censorFilter(name)}
              </span>
              {removable && <ChannelDropdown channelId={id} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
