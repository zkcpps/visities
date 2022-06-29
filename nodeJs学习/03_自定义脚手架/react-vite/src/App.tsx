import React, { Suspense, useEffect } from 'react';
import routes from '@/routers';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import wwJsSdk from './utils/jsSdk';

function App() {
  useEffect(() => {
    wwJsSdk.init(); // 初始化企微环境
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div />}>
        <Switch>
          {routes.map((route: any) => (
            <Route path={route.path} key={route.path} component={route.component} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
