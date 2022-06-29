import React, { Component } from 'react';

import { Result } from 'antd-mobile';
import { SmileOutline } from 'antd-mobile-icons';
import Change from './change';
import Show from './show';

export class index extends Component {
  render() {
    return (
      <>
        <Result icon={<SmileOutline />} status="success" title="测试页面" description="测试页面测试页面" />
        <Change />
        <Show />
      </>
    );
  }
}

export default index;
