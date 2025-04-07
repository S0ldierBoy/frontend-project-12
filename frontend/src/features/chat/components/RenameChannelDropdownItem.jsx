import { useState } from 'react';
import modalSchema from '../../../utils/validation/modalSchema.js';
import ModalForm from '../../../components/ui/ModalForm.jsx';
import { renameChannel } from '../../../services/api/channelsApi.js';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import useToast from '../../../hooks/useToast.js';

const RenameChannelDropdownItem = ({ name, id, channels }) => {
  const { showSuccess, showError } = useToast();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channelNames = channels.map((channel) => channel.name);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (values) => {
    try {
      await dispatch(renameChannel({ id, name: values.name })).unwrap();
      showSuccess('modal.rename.toastSuccess');
      handleClose();
    } catch (error) {
      showError(error);
      throw error;
    }
  };

  return (
    <>
      <Dropdown.Item onClick={handleShow}>{t('modal.rename.menuItem')}</Dropdown.Item>
      <ModalForm
        t={t}
        channelNames={channelNames}
        show={show}
        onClose={handleClose}
        schema={modalSchema}
        title={t('modal.rename.title')}
        buttonConfirm={t('modal.rename.buttonConfirm')}
        buttonCancel={t('modal.rename.buttonCancel')}
        placeholder={t('modal.rename.placeholder')}
        onSubmit={handleSubmit}
        initialValues={{ name: name || '' }}
        labelText={t('modal.add.labelText')}
      />
    </>
  );
};

export default RenameChannelDropdownItem;
