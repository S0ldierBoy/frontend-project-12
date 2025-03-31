import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import RemoveChannelModal from '../modal/RemoveChannelModal.jsx';

const ChannelDropdown = ({ id, name }) => {
  return (
    <Dropdown as={ButtonGroup} className="dropdown">
      <Dropdown.Toggle
        split
        variant="success"
        id="dropdown-split-basic"
        className="dropdown-toggle"
      />

      <Dropdown.Menu>
        <RemoveChannelModal id={id}>Delete</RemoveChannelModal>
        <Dropdown.Item onClick={() => console.log('Change', id)}>Change</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelDropdown;
