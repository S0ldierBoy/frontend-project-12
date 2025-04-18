import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import routes from './routes.jsx';
import { initSocketListeners } from '../services/socket/listeners.js';
import ToastNotifications from '../components/ui/ToastNotifications.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initSocketListeners(dispatch);
  }, []);

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
