import { removeChannel } from '../../api/channelsApi.js';
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { ChatInputFocusContext } from '../../context/ChatInputFocusContext.jsx';

const RemoveChannelDropdownItem = ({ id }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { setFocus } = useContext(ChatInputFocusContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemoveChannel = () => {
    dispatch(removeChannel(id));
    handleClose();
  };

  return (
    <>
      <Dropdown.Item onClick={handleShow}>Delete</Dropdown.Item>

      <Modal
        show={show}
        onHide={handleClose}
        onExited={() => setTimeout(() => setFocus(), 10)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete the channel ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRemoveChannel}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoveChannelDropdownItem;
