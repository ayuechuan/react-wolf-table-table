import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { useStore } from '../store/store';

export const Toolsbar = observer(() => {
  const store = useStore();
  return (
    <div>
      <button onClick={() =>void store.toolsBarStore.setCellStyle()}>cell style</button>
      <button onClick={()=>void store.toolsBarStore.freeze()}>冻结</button>
    </div>
  );
});

