import { useState } from 'react';
import modalSchema from '../../validation/modalSchema.js';
import ModalForm from './ModalForm.jsx';
import { renameChannel } from '../../api/channelsApi.js';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';

const RenameChannelDropdownItem = ({ name, id, channels }) => {
  const dispatch = useDispatch();
  const channelNames = channels.map((channel) => channel.name); // массив имен

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (values) => {
    dispatch(renameChannel({ id, name: values.name }));
    handleClose();
  };
  return (
    <>
      <Dropdown.Item onClick={handleShow}>Rename</Dropdown.Item>
      <ModalForm
        channelNames={channelNames}
        show={show}
        onClose={handleClose}
        schema={modalSchema}
        title="Rename channel"
        buttonName="Confirm"
        onSubmit={handleSubmit}
        placeholder={''}
        initialValues={{ name: name || '' }}
      />
    </>
  );
};

export default RenameChannelDropdownItem;
