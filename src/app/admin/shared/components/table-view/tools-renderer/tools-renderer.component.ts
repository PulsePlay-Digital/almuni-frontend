import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-tools-renderer',
  templateUrl: './tools-renderer.component.html',
  styleUrls: ['./tools-renderer.component.scss']
})
export class ToolsRendererComponent implements ICellRendererAngularComp {

  public params: any;

  async agInit(params: any) {
    this.params = params;
  }

  constructor() { }

  refresh(): boolean {
    return false;
  }

  public edit() {
    console.log(this.params);
    if (this.params) {
      this.params.context.componentParent.rowEdit(this.params.value, this.params.data);
    }
  }

  ngOnInit(): void {
  }

}
