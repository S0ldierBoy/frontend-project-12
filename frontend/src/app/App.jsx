import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initSocketListeners } from '../socket/listeners.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    initSocketListeners(dispatch);
  }, []);

  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
