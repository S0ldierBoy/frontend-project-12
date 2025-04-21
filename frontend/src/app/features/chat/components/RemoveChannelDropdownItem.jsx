import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import RemoveChannelModal from './RemoveChannelModal.jsx';

const RemoveChannelDropdownItem = ({ channelId, closeDropdown }) => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    closeDropdown();
    setTimeout(() => setModalOpen(true), 0);
  };

  return (
    <>
      <Dropdown.Item as="button" type="button" onClick={handleClick}>
        {t('modal.remove.menuItem')}
      </Dropdown.Item>

      {isModalOpen && (
        <RemoveChannelModal channelId={channelId} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default RemoveChannelDropdownItem;
