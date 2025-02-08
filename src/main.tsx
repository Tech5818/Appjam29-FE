import { Provider } from '@app/Provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// prettier-ignore
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider/>
  </StrictMode>,
)
