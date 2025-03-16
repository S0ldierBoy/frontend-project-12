import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegistrationPage from './pages/RegisterPage.jsx';
import MainChatPage from './pages/MainChatPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainChatPage />} /> {/* Главная страница */}
        <Route path="/login" element={<LoginPage />} /> {/* Вход */}
        <Route path="/register" element={<RegistrationPage />} />{' '}
        {/* Регистрация */}
        <Route path="*" element={<NotFoundPage />} />{' '}
        {/* Любой несуществующий маршрут  */}
      </Routes>
    </Router>
  );
}

export default App;
