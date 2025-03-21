import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser } from '../api/authApi.js';
import AuthForm from '../features/auth/AuthForm.jsx';

const LoginPage = () => {
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

  const loginSchema = Yup.object({
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

  return (
    <div>
      <AuthForm
        title="Login"
        fields={[
          { name: 'name', label: 'Name' },
          { name: 'password', label: 'Password', type: 'password' },
        ]}
        initialValues={{ name: '', password: '' }}
        onSubmit={handleLogin}
        schema={loginSchema}
        redirectPrompt="Don't have an account?"
        redirectName="Sign up!"
        switchLink="/signup"
      />
    </div>
  );
};

export default LoginPage;
