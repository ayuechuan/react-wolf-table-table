import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { useStore } from './store/store';

export const GetContainer: FC = observer(() => {
  const store = useStore();
  return (
    <div className='get-container' style={{ position: 'absolute', left: 0, top: 0, zIndex: 999 }}>
      {store.contextMenuConfig.visible &&
        <div
          style={{
            transform: `translate(${store.contextMenuConfig.left}px,${store.contextMenuConfig.top}px)`,
            minWidth: 180,
            boxShadow: '0 2px 8px 2px rgba(68, 73, 77, 0.16)',
            border: '0 solid rgba(0, 0, 0, 0.12)',
            borderRadius: '4px',
            zIndex: 4001,
            backgroundColor: '#fff',
          }}>
          <ul>
            <li>复制</li>
            <li>剪切</li>
            <li>粘贴</li>
            <li>向上添加一行</li>
            <li>向下添加一行</li>
          </ul>
        </div>}
    </div>
  );
});

