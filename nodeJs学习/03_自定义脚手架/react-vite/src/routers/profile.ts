import { lazy } from 'react';

const profileRouters: object[] = [
  {
    path: '/profile',
    component: lazy(() => import('@/pages/Profile')),
  }
];

export default profileRouters;
