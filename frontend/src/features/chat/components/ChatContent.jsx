import { useState } from 'react';
import FocusLock from 'react-focus-lock';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addMessage } from '../../../services/api/messagesApi.js';
import { useAutoScroll } from '../../../hooks/useAutoScroll.js';
import useChannelMessages from '../../../hooks/useChannelMessages.js';
import censorFilter from '../../../utils/censorFilter.js';

const ChatContent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');

  const { activeChannelName: channelName, activeChannelId: channelId } = useSelector(
    (state) => state.channels
  );
  const isLoading = useSelector((state) => state.messages.loading);
  const username = useSelector((state) => state.auth.user);
  const channelMessages = useChannelMessages(channelId);

  const elementRef = useAutoScroll([channelMessages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    dispatch(addMessage({ body: messageText, channelId, username }));
    setMessageText('');
  };

  return (
    <div className="chat-content">
      <div className="chat-title">
        <h2># {censorFilter(channelName)}</h2>
        <span>{t('chat.messageCount', { count: channelMessages.length })}</span>
      </div>

      <div className="messages-area">
        {channelMessages.map(({ id, body, username }) => (
          <p key={id}>
            {username}: {censorFilter(body)}
          </p>
        ))}
        <div ref={elementRef}></div>
      </div>
      <FocusLock>
        <form className="message-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="message-input"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder={t('chat.placeholder')}
            data-autofocus="true"
          />
          <button type="submit" className="send-button" disabled={isLoading}>
            ➤
          </button>
        </form>
      </FocusLock>
    </div>
  );
};

export default ChatContent;
