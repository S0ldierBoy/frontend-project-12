import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import RenameChannelModal from './RenameChannelModal.jsx';

const RenameChannelDropdownItem = ({ channelId }) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <Dropdown.Item onClick={handleClick}>{t('modal.rename.menuItem')}</Dropdown.Item>

      {isOpen && (
        <RenameChannelModal channelId={channelId} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default RenameChannelDropdownItem;
