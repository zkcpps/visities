import { lazy } from 'react';

const policyRouters: object[] = [
  {
    path: '/demo',
    component: lazy(() => import('@/pages/Demo')),
  },
];

export default policyRouters;
