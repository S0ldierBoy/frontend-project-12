import { useDispatch } from 'react-redux';
import { signupSchema } from '../utils/validation/authSchema.js';
import { signupUser } from '../services/api/authApi.js';
import AuthForm from '../features/auth/AuthForm.jsx';
import { useTranslation } from 'react-i18next';

const SignupPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleRegister = async (values) => {
    await dispatch(signupUser(values)).unwrap();
  };

  return (
    <div>
      <AuthForm
        t={t}
        title={t('auth.signUp.title')}
        fields={[
          { name: 'name', label: t('auth.formField.name') },
          {
            name: 'password',
            label: t('auth.formField.password'),
            type: 'password',
          },
          {
            name: 'confirmPassword',
            label: t('auth.formField.confirmPassword'),
            type: 'password',
          },
        ]}
        initialValues={{
          name: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleRegister}
        schema={signupSchema}
        redirectPrompt={t('auth.signUp.redirectPrompt')}
        redirectName={t('auth.signUp.redirectName')}
        switchLink="/login"
        buttonName={t('auth.signUp.button')}
      />
    </div>
  );
};

export default SignupPage;
