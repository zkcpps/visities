import React from 'react';
import { Empty } from 'antd-mobile';
import { QuestionCircleOutline } from 'antd-mobile-icons';

export default () => {
  return (
    <Empty
      style={{ padding: '64px 0' }}
      image={
        <QuestionCircleOutline
          style={{
            color: 'var(--adm-color-light)',
            fontSize: 48,
          }}
        />
      }
      description="404"
    />
  );
};
