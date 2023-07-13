import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useStore } from '../store/store';



export const Smartsheets = observer(() => {
  const store = useStore();

  useEffect(() => {
    store.render();
  }, []);

  return (
    <div
      id='table-containr'
      onContextMenu={(event) => void store.contextMenuConfig.onContextMenuEvent(event)}>

    </div>
  );
});

