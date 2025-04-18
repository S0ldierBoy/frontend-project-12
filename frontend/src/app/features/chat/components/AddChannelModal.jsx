import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import modalSchema from '../../../../utils/validation/modalSchema.js';
import ModalForm from '../../../components/ui/ModalForm.jsx';
import { addChannel } from '../../../../services/api/channelsApi.js';
import useToast from '../../../../hooks/useToast.js';

const AddChannelModal = ({ show, onClose, channels }) => {
  const { showSuccess, showError } = useToast();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channelNames = channels.map((channel) => channel.name);

  const handleSubmit = async (values) => {
    try {
      await dispatch(addChannel(values)).unwrap();
      showSuccess('modal.add.toastSuccess');
      onClose();
    } catch (error) {
      showError(error);
      throw error;
    }
  };

  return (
    <ModalForm
      t={t}
      channelNames={channelNames}
      show={show}
      onClose={onClose}
      schema={modalSchema}
      title={t('modal.add.title')}
      buttonConfirm={t('modal.add.buttonConfirm')}
      buttonCancel={t('modal.add.buttonCancel')}
      placeholder={t('modal.add.placeholder')}
      initialValues={{ name: '' }}
      labelText={t('modal.add.labelText')}
      onSubmit={handleSubmit}
    />
  );
};

export default AddChannelModal;
