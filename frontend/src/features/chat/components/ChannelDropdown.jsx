import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import RemoveChannelDropdownItem from './RemoveChannelDropdownItem.jsx';
import RenameChannelDropdownItem from './RenameChannelDropdownItem.jsx';

const ChannelDropdown = ({ id, name, channels }) => {
  return (
    <Dropdown as={ButtonGroup} className="dropdown" onClick={(e) => e.stopPropagation()}>
      <Dropdown.Toggle split variant="success" />

      <Dropdown.Menu>
        <RemoveChannelDropdownItem id={id}></RemoveChannelDropdownItem>
        <RenameChannelDropdownItem
          id={id}
          name={name}
          channels={channels}
        ></RenameChannelDropdownItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelDropdown;
