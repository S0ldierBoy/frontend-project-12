import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { Provider as ReduxProvider } from 'react-redux';
import { StrictMode } from 'react';
import store from './app/store.js';
import App from './app/App.jsx';
import './index.css';
import i18n from './app/i18n.js';
import leoProfanity from 'leo-profanity';
import rollbarConfig from './utils/rollbarConfig.js';

leoProfanity.loadDictionary(['ru', 'en']);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <ReduxProvider store={store}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ReduxProvider>
      </ErrorBoundary>
    </RollbarProvider>
  </StrictMode>
);
