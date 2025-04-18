import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { removeChannel } from '../../../../services/api/channelsApi.js';
import useToast from '../../../../hooks/useToast.js';

const RemoveChannelDropdownItem = ({ id }) => {
  const { showSuccess, showError } = useToast();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemoveChannel = async () => {
    try {
      await dispatch(removeChannel(id)).unwrap();
      showSuccess('modal.remove.toastSuccess');
      handleClose();
    } catch (error) {
      showError(error);
      throw error;
    }
  };

  return (
    <>
      <Dropdown.Item onClick={handleShow}>{t('modal.remove.menuItem')}</Dropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('modal.remove.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('modal.remove.body')}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t('modal.remove.buttonCancel')}
          </Button>
          <Button variant="danger" onClick={handleRemoveChannel}>
            {t('modal.remove.buttonConfirm')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoveChannelDropdownItem;
