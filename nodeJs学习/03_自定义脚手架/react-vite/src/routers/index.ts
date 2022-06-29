const autoLoadRoutes: any = [];

const routerFiles = import.meta.globEager('./*.ts');
const paths = Object.keys(routerFiles);
paths.forEach((path) => {
  autoLoadRoutes.push(...routerFiles[path].default);
});

const routes = [
  ...autoLoadRoutes,

  {
    path: '*',
    component: () => import('@/pages/NotFound'),
  },
];

export default routes;
