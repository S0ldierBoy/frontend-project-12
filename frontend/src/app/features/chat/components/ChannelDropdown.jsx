import { useState, useCallback } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import RemoveChannelDropdownItem from './RemoveChannelDropdownItem.jsx';
import RenameChannelDropdownItem from './RenameChannelDropdownItem.jsx';

const ChannelDropdown = ({ channelId }) => {
  const [show, setShow] = useState(false);

  /* Bootstrap вызывает onToggle при клике и rootClose‑событии */
  const handleToggle = useCallback((nextShow) => setShow(nextShow), []);

  const closeDropdown = useCallback(() => setShow(false), []);

  return (
    <Dropdown as={ButtonGroup} className="dropdown" show={show} onToggle={handleToggle}>
      <Dropdown.Toggle split variant="success" />

      <Dropdown.Menu>
        <RemoveChannelDropdownItem channelId={channelId} closeDropdown={closeDropdown} />
        <RenameChannelDropdownItem channelId={channelId} closeDropdown={closeDropdown} />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelDropdown;
