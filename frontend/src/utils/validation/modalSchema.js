import * as Yup from 'yup';
import i18n from '../../i18n.js';

const t = i18n.t;

const modalSchema = (existingNames, currentName = '') =>
  Yup.object().shape({
    name: Yup.string()
      .trim()
      .required(t('validation.modal.required'))
      .min(3, t('validation.modal.tooShort'))
      .max(10, t('validation.modal.tooLong'))
      .notOneOf(
        existingNames.filter((name) => name !== currentName),
        t('validation.modal.channelExists')
      ),
  });

export default modalSchema;
