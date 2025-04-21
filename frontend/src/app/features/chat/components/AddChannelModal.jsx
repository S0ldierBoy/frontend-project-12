import { useSelector, useDispatch } from 'react-redux';
import { selectAllChannels } from '../channelSlice.js';
import modalSchema from '../../../../utils/validation/modalSchema.js';
import ModalForm from '../../../components/ui/ModalForm.jsx';
import { addChannel } from '../../../../services/api/channelsApi.js';
import useToast from '../../../../hooks/useToast.js';

const AddChannelModal = ({ show, onClose }) => {
  const { showSuccess, showError } = useToast();
  const dispatch = useDispatch();
  const channelNames = useSelector(selectAllChannels).map((c) => c.name);

  const handleSubmit = async (values) => {
    try {
      await dispatch(addChannel(values)).unwrap();
      showSuccess('modal.add.toastSuccess');
      onClose();
    } catch (err) {
      showError(err);
      throw err;
    }
  };

  return (
    <ModalForm
      show={show}
      onClose={onClose}
      schema={modalSchema(channelNames)}
      initialValues={{ name: '' }}
      onSubmit={handleSubmit}
      i18nKeyPrefix="modal.add"
    />
  );
};

export default AddChannelModal;
