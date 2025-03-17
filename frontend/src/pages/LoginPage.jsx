import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { loginUser } from '../api/authApi.js';
import AuthForm from '../components/auth/AuthForm.jsx';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    await dispatch(loginUser(values));
  };

  const SignupSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required')
      .label('Name'),

    password: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required')
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
        validationSchema={SignupSchema}
        redirectPrompt="Don't have an account?"
        redirectName="Sign up!"
        switchLink="/register"
      />
    </div>
  );
};

export default LoginPage;
