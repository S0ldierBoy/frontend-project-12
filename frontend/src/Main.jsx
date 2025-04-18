import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import store from './app/store.js';
import App from './app/App.jsx';
import './index.css';
import i18n from './app/i18n.js';
import leoProfanity from 'leo-profanity';

leoProfanity.loadDictionary(['ru', 'en']);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>
);
