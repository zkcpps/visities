import { demoState } from '@/store';
import React from 'react';
import { useRecoilValue } from 'recoil';

export default function Show() {
  const count = useRecoilValue(demoState);

  return <>Character Count: {count}</>;
}
