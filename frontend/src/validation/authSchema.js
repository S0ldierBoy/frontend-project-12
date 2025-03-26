import * as Yup from 'yup';

export const loginSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required field')
    .label('Name'),

  password: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required field')
    .label('Password'),
});

export const signupSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required field')
    .label('Name'),

  password: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required field')
    .label('Password'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required field')
    .label('Confirm password'),
});
