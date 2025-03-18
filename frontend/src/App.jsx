import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegistrationPage from './pages/RegisterPage.jsx';
import MainChatPage from './pages/MainChatPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/" element={<MainChatPage />} />

        <Route path="*" element={<NotFoundPage />} />
        {/* Любой несуществующий маршрут  */}
      </Routes>
    </Router>
  );
}

export default App;
