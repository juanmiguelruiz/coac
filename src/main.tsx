import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Spinner from 'components/Spinner';
import { QueryClientProvider } from './query-manager';
import { Router } from './routes';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <QueryClientProvider>
        <Router />
      </QueryClientProvider>
    </Suspense>
  </StrictMode>
);
