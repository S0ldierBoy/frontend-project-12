import { removeChannel } from '../../api/channelsApi.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

const RemoveChannelDropdownItem = ({ id }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemoveChannel = () => {
    dispatch(removeChannel(id));
    handleClose();
  };

  return (
    <>
      <Dropdown.Item onClick={handleShow}>Delete</Dropdown.Item>

      <Modal show={show} onHide={handleClose}>
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
