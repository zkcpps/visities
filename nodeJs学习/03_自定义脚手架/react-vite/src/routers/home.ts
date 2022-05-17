import { lazy } from 'react';

const homeRouters: object[] = [
  {
    path: '/home',
    component: lazy(() => import('@/pages/Home')),
  }
];

export default homeRouters;
