import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { removeChannel } from '../../api/channelsApi.js';
import { useDispatch } from 'react-redux';

const ChannelDropdown = ({ id, name }) => {
  const dispatch = useDispatch();
  return (
    <Dropdown as={ButtonGroup} className="dropdown">
      <Dropdown.Toggle
        split
        variant="success"
        id="dropdown-split-basic"
        className="dropdown-toggle"
      />

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => dispatch(removeChannel(id))}>Delete</Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('Change', id)}>Change</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelDropdown;

// для удаления нужен слой
