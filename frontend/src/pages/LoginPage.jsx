import React from 'react';
import AuthForm from '../components/auth/AuthForm.jsx';
import { loginUser } from '../api/authApi.js';

const LoginPage = () => (
  <div>
    <AuthForm
      title="Login"
      fields={[
        { name: 'name', label: 'Name' },
        { name: 'password', label: 'Password', type: 'password' },
      ]}
      initialValues={{ name: '', password: '' }}
      onSubmit={loginUser}
      redirectPrompt="Don't have an account?"
      redirectName="Sign up!"
      switchLink="/register"
    />
  </div>
);

export default LoginPage;
