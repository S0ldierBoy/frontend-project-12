import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './ui/LanguageSwitcher.jsx';
import useAuth from '../../hooks/useAuth.js';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const hideLogoutButton = location.pathname === '/';
  const { logout } = useAuth();

  return (
    <header className="chat-header">
      <h1>
        <Link to="/">Hexlet Chat</Link>
      </h1>
      <div className="lang-switcher">
        <LanguageSwitcher />
      </div>
      {hideLogoutButton && (
        <button className="logout-button" onClick={logout}>
          {t('header.logoutBtn')}
        </button>
      )}
    </header>
  );
};

export default Header;
