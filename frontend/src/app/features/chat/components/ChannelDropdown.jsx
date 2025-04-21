import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import RemoveChannelDropdownItem from './RemoveChannelDropdownItem.jsx';
import RenameChannelDropdownItem from './RenameChannelDropdownItem.jsx';

const ChannelDropdown = ({ channelId }) => (
  <Dropdown as={ButtonGroup} className="dropdown" onClick={(e) => e.stopPropagation()}>
    <Dropdown.Toggle split variant="success">
      <span className="sr-only">Управление каналом</span>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <RemoveChannelDropdownItem id={channelId} />
      <RenameChannelDropdownItem channelId={channelId} />
    </Dropdown.Menu>
  </Dropdown>
);

export default ChannelDropdown;
