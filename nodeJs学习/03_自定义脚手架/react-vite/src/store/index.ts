import { atom } from 'recoil';

export const demoState = atom({
  key: 'demo', // unique ID (with respect to other atoms/selectors)
  default: '111', // default value (aka initial value)
});
