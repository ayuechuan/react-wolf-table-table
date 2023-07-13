import { makeAutoObservable } from "mobx";
import { RootStore } from "./store";

export class ToolsBarStore {
  constructor(private readonly core: RootStore) {
    makeAutoObservable(this);
  }
  get table() {
    return this.core.table;
  }

  public setCellStyle(): void {
    // add style
    const si = this.core.table.addStyle({
      bold: true,
      italic: true,
      underline: true,
      color: '#1b1c1d',
    });


    // console.log('111',si);
    
    // set cell
    // this.core.table.cell(2, 2, { value: 'set-value', style: si }).render();
    this.core.table.cell(1, 2, { value: 'set-value', style: si }).render();
    // get cell
    console.log('cell[2,2]:', this.table, this.table.cell(2, 2));
  }

  public freeze(){
    this.core.table.freeze('D5').render();
  }
}