import modalSchema from '../../validation/modalSchema.js';
import ModalForm from './ModalForm.jsx';
import { addChannel } from '../../api/channelsApi.js';
import { useDispatch } from 'react-redux';

const AddChannelModal = ({ show, onClose, channels }) => {
  const dispatch = useDispatch();
  const channelNames = channels.map((channel) => channel.name);

  const handleSubmit = (values) => dispatch(addChannel(values)).unwrap();

  return (
    <ModalForm
      channelNames={channelNames}
      show={show}
      onClose={onClose}
      schema={modalSchema}
      title="Add channel"
      buttonName="Create"
      onSubmit={handleSubmit}
      placeholder="Enter new channel name..."
      initialValues={{ name: '' }}
    />
  );
};

export default AddChannelModal;
