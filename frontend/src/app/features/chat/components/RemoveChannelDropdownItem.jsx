import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import FocusLock from 'react-focus-lock';
import { useTranslation } from 'react-i18next';
import { removeChannel } from '../../../../services/api/channelsApi.js';
import useToast from '../../../../hooks/useToast.js';

const RemoveChannelModal = ({ channelId, onClose }) => {
  const { t } = useTranslation();
  const { showSuccess, showError } = useToast();
  const dispatch = useDispatch();

  const handleRemove = async () => {
    try {
      await dispatch(removeChannel(channelId)).unwrap();
      showSuccess('modal.remove.toastSuccess');
      onClose();
    } catch (err) {
      showError(err);
    }
  };

  return (
    <Modal show onHide={onClose} data-bs-theme="dark">
      <FocusLock returnFocus>
        <Modal.Header closeButton>
          <Modal.Title>{t('modal.remove.title')}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{t('modal.remove.body')}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            {t('modal.remove.buttonCancel')}
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            {t('modal.remove.buttonConfirm')}
          </Button>
        </Modal.Footer>
      </FocusLock>
    </Modal>
  );
};

export default RemoveChannelModal;
