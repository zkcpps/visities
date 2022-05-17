import { demoState } from '@/store';
import React from 'react';
import { useRecoilState } from 'recoil';
// import { textState } from '@/store/index';

export default function Change() {
  const [text, setText] = useRecoilState(demoState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
