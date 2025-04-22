import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routesConfig.jsx';
import ToastNotifications from './components/ui/ToastNotifications.jsx';
import useSocket from '../hooks/useSocket.js';

const App = () => {
  useSocket();

  return (
    <Router>
      <ToastNotifications />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
