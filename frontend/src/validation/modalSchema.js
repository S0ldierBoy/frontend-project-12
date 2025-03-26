import * as Yup from 'yup';

const modalSchema = (existingNames, currentName = '') =>
  Yup.object().shape({
    name: Yup.string()
      .trim()
      .required('Required field')
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .notOneOf(
        existingNames.filter((name) => name !== currentName),
        'Channel name already exists'
      ),
  });

export default modalSchema;
