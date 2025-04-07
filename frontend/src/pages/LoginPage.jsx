import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api/authApi.js';
import AuthForm from '../features/auth/AuthForm.jsx';
//import { loginSchema } from '../utils/validation/authSchema.js';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleLogin = async (values) => {
    await dispatch(loginUser(values)).unwrap();
  };

  return (
    <div>
      <AuthForm
        t={t}
        title={t('auth.login.title')}
        fields={[
          { name: 'name', label: t('auth.formField.NickName') },
          { name: 'password', label: t('auth.formField.password'), type: 'password' },
        ]}
        initialValues={{ name: '', password: '' }}
        onSubmit={handleLogin}
        redirectPrompt={t('auth.login.redirectPrompt')}
        redirectName={t('auth.login.redirectName')}
        switchLink="/signup"
        buttonName={t('auth.login.button')}
      />
    </div>
  );
};

export default LoginPage;
