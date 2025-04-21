import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllChannels } from '../channelSlice.js';
import Dropdown from 'react-bootstrap/Dropdown';
import modalSchema from '../../../../utils/validation/modalSchema.js';
import ModalForm from '../../../components/ui/ModalForm.jsx';
import { renameChannel } from '../../../../services/api/channelsApi.js';
import useToast from '../../../../hooks/useToast.js';
import { useTranslation } from 'react-i18next';

const RenameChannelDropdownItem = ({ channelId }) => {
  const { t } = useTranslation();
  const { showSuccess, showError } = useToast();
  const dispatch = useDispatch();
  const channels = useSelector(selectAllChannels);
  const current = channels.find((c) => c.id === channelId);
  const channelNames = channels.map((c) => c.name);

  const [show, setShow] = useState(false);

  const handleSubmit = async (values) => {
    try {
      await dispatch(renameChannel({ id: channelId, name: values.name })).unwrap();
      showSuccess('modal.rename.toastSuccess');
      setShow(false);
    } catch (err) {
      showError(err);
      throw err;
    }
  };

  return (
    <>
      <Dropdown.Item onClick={() => setShow(true)}>
        {t('modal.rename.menuItem')}
      </Dropdown.Item>

      <ModalForm
        show={show}
        onClose={() => setShow(false)}
        schema={modalSchema(channelNames)}
        initialValues={{ name: current?.name ?? '' }}
        onSubmit={handleSubmit}
        i18nKeyPrefix="modal.rename"
      />
    </>
  );
};

export default RenameChannelDropdownItem;
