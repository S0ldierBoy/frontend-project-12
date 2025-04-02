import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();

  return (
    <div className="chat-header">
      <h1>
        <Link to="/">CodeChat</Link>
      </h1>
      <button className="logout-button" onClick={logout}>
        {t('header.logoutBtn')}
      </button>
    </div>
  );
};

export default Header;
