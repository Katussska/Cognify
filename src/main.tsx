import { StrictMode } from 'react';

import '@/i18n';
import '@/index.css';

import App from './App';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
