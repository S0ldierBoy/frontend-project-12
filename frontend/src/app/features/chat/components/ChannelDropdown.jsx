import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import RenameChannelModal from './RenameChannelModal.jsx';
import RemoveChannelModal from './RemoveChannelModal.jsx';

const ChannelDropdown = ({ channelId }) => {
  const [renameOpen, setRenameOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);

  const handleSelect = (key) => {
    if (key === 'rename') setRenameOpen(true);
    if (key === 'remove') setRemoveOpen(true);
  };

  return (
    <>
      <Dropdown as={ButtonGroup} className="dropdown" onSelect={handleSelect}>
        <Dropdown.Toggle split variant="success" />

        <Dropdown.Menu>
          <Dropdown.Item eventKey="rename">Переименовать</Dropdown.Item>
          <Dropdown.Item eventKey="remove">Удалить</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {renameOpen && (
        <RenameChannelModal channelId={channelId} onClose={() => setRenameOpen(false)} />
      )}

      {removeOpen && (
        <RemoveChannelModal channelId={channelId} onClose={() => setRemoveOpen(false)} />
      )}
    </>
  );
};

export default ChannelDropdown;
