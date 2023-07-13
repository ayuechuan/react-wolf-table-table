import Table from "@wolf-table/table";
import { makeObservable, action } from "mobx";
import { ToolsBarStore } from "./toolsbaar.store";
import React, { createContext, useContext } from "react";
import EventEmitter from "events";
import { ContextMenuConfig } from "./contextMenu.store";

export class RootStore {
  public table!: Table | any;
  public readonly toolsBarStore = new ToolsBarStore(this);
  public readonly contextMenuConfig = new ContextMenuConfig(this);
  private readonly event = new EventEmitter();

  constructor() {
    makeObservable(this, {
      render: action
    })
  }

  render(element: string | HTMLElement = '#table-containr'): void {
    const instace = Table.create(
      element,
      () => 1400,
      () => 600,
      {
        scrollable: true,
        resizable: true,
        selectable: true,
        editable: true,
        copyable: true,
      }
    );

    instace.addBorder('E8:L12', 'all', 'medium', '#21ba45')
    instace.formulaParser((v) => `${v}-formula`)
    instace.data({
      styles: [
        { bold: true, strikethrough: true, color: '#21ba45', italic: true, align: 'center', fontSize: 12 },
      ],
      cells: [
        [0, 0, 'abc'],
        [1, 1, 100],
        [2, 6, { value: 'formua', style: 0 }],
        [9, 5, { value: '', formula: '=sum(A1:A10)' }],
      ],
    })
    instace.render();
    this.table = instace;
  }
}

const storeContext = createContext<RootStore>(new RootStore());
export function useStore(): RootStore {
  return useContext(storeContext);
}

