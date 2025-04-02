import { useState } from 'react';
import modalSchema from '../../validation/modalSchema.js';
import ModalForm from './ModalForm.jsx';
import { renameChannel } from '../../api/channelsApi.js';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';

const RenameChannelDropdownItem = ({ name, id, channels }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channelNames = channels.map((channel) => channel.name);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (values) => {
    dispatch(renameChannel({ id, name: values.name }));
    handleClose();
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
      />
    </>
  );
};

export default RenameChannelDropdownItem;
