import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { openModal } from '../modalSlice.js';

const ChannelDropdown = ({ channelId }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleToggle = useCallback((nextShow) => setShow(nextShow), []);
  const closeDropdown = useCallback(() => setShow(false), []);

  const openRemove = () => {
    closeDropdown();
    dispatch(openModal({ type: 'removeChannel', props: { channelId } }));
  };

  const openRename = () => {
    closeDropdown();
    dispatch(openModal({ type: 'renameChannel', props: { channelId } }));
  };

  return (
    <Dropdown as={ButtonGroup} className="dropdown" show={show} onToggle={handleToggle}>
      <Dropdown.Toggle split variant="success">
        <span className="sr-only">Управление каналом</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="button" onClick={openRemove}>
          Удалить
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={openRename}>
          Переименовать
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelDropdown;
