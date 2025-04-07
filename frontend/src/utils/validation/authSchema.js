import * as Yup from 'yup';
import i18n from '../../app/i18n.js';

const t = i18n.t;

export const loginSchema = Yup.object({
  name: Yup.string()
    .min(3, t('validation.auth.tooShort'))
    .max(20, t('validation.auth.tooLong'))
    .required(t('validation.auth.required'))
    .label(t('auth.formField.name')),

  password: Yup.string()
    .min(6, t('validation.auth.tooShort'))
    .max(10, t('validation.auth.tooLong'))
    .required(t('validation.auth.required'))
    .label(t('auth.formField.password')),
});

export const signupSchema = Yup.object({
  name: Yup.string()
    .min(3, t('validation.auth.tooShort'))
    .max(20, t('validation.auth.tooLong'))
    .required(t('validation.auth.required'))
    .label(t('auth.formField.name')),

  password: Yup.string()
    .min(6, t('validation.auth.tooShort'))
    .max(10, t('validation.auth.tooLong'))
    .required(t('validation.auth.required'))
    .label(t('auth.formField.password')),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], t('validation.auth.passwordsMustMatch'))
    .required(t('validation.auth.required'))
    .label(t('auth.formField.confirmPassword')),
});
