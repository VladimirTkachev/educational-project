import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'shared/config/i18n/i18n';

import { App } from './App/App';
import { ErrorBoundary } from './App/providers/ErroBoundary';
import { ThemeProvider } from './App/providers/ThemeProvider';
import { StoreProvider } from './App/providers/StoreProvider';

import './App/styles/index.scss';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
