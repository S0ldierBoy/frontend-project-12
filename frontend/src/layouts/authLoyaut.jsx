import Header from '../layouts/Header.jsx';

const AuthLayout = ({ children }) => (
  <>
    <Header />
    <div className="auth-content">{children}</div>
  </>
);

export default AuthLayout;
