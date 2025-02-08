import { FeelPage } from '@pages/feel/ui';
import { FirstPage } from '@pages/first/ui';
import { GuardianPage } from '@pages/guardian/ui';
import { HomePage } from '@pages/home/ui';
import { LoginPage } from '@pages/login/ui';
import { ProfilePage } from '@pages/profile/ui';
import { RecognitionPage } from '@pages/recognition/ui';
import { SummationPage } from '@pages/summation/ui';
import { WandPage } from '@pages/wand/ui';
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
  {
    path: '/feel',
    element: <FeelPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/recognition',
    element: <RecognitionPage />,
  },
  {
    path: '/summation',
    element: <SummationPage />,
  },
  {
    path: '/wand',
    element: <WandPage />,
  },
  {
    path: '/guardian',
    element: <GuardianPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
