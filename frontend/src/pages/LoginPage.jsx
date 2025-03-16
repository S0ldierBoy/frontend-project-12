import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../api/authApi.js';
import AuthForm from '../components/auth/AuthForm.jsx';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    await dispatch(loginUser(values));
  };

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
        redirectPrompt="Don't have an account?"
        redirectName="Sign up!"
        switchLink="/register"
      />
    </div>
  );
};

export default LoginPage;
