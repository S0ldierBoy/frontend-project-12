import LoginPage from '../pages/LoginPage.jsx';
import MainChatPage from '../pages/MainChatPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import SignupPage from '../pages/SignupPage.jsx';

const routes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/', element: <MainChatPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
