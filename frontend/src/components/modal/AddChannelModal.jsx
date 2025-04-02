import modalSchema from '../../validation/modalSchema.js';
import ModalForm from './ModalForm.jsx';
import { addChannel } from '../../api/channelsApi.js';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const AddChannelModal = ({ show, onClose, channels }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channelNames = channels.map((channel) => channel.name);

  const handleSubmit = async (values) => {
    await dispatch(addChannel(values)).unwrap();
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
      onSubmit={handleSubmit}
    />
  );
};

export default AddChannelModal;
