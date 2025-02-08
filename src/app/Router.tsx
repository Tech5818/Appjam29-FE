import { FirstPage } from '@pages/first/ui';
import { HomePage } from '@pages/home/ui';
import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/first',
    element: <FirstPage />,
  },
]);
