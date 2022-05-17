import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'antd-mobile/es/global';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <HashRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </HashRouter>,
  document.getElementById('root')
);
