import React from 'react';
import LanguageSwitcher from '../components/ui/LanguageSwitcher.jsx';

const AuthLayout = ({ children }) => (
  <div className="auth-layout">
    <div className="auth-header">
      <LanguageSwitcher />
    </div>
    <div className="auth-content">{children}</div>
  </div>
);

export default AuthLayout;
