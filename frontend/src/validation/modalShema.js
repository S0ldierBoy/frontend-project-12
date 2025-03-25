import * as Yup from 'yup';

const modalSchema = (existingNames, currentName = '') =>
  Yup.object().shape({
    name: Yup.string()
      .trim()
      .required('Обязательное поле')
      .min(3, 'От 3 символов')
      .max(20, 'До 20 символов')
      .notOneOf(
        existingNames.filter((name) => name !== currentName),
        'Канал с таким именем уже существует'
      ),
  });

export default modalSchema;
