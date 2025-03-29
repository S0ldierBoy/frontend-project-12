import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const ChannelDropdown = ({ name, id }) => {
  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Сhange name</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelDropdown;
