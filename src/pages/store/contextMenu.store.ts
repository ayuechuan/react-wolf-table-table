import { RootStore } from "./store";
import { makeAutoObservable } from "mobx";

export class ContextMenuConfig {
  public left = -999;
  public top = -999;

  constructor(private readonly core: RootStore) {
    makeAutoObservable(this);
    this.onPluginEvent();
  }

  get visible() {
    return this.left >= 0 && this.top >= 0;
  };

  public onContextMenuEvent(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    this.left = event.clientX;
    this.top = event.clientY;
  }

  private onPluginEvent(): void {
    //  插件应发布一个cell selected的事件用于通知外部嗲用着当前选中的单元格
    // this.core.table.on('cell-selected', (cell: any) => {
    //   //  单元格选中变更  右键菜单close
    //   this.left = -999;
    //   this.top = -999;
    // })
  }
}