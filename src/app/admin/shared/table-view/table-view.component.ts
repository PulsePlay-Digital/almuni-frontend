import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input() columns: any;
  @Input() rowsList: any;
  @Input() defaultColDef: any;
  public gridApi: any;
  private gridColumnApi: any;
  style = {
    width: '100%',
    height: '300px'
  };
  gridOptions: GridOptions | any;

  constructor() { }

  ngOnInit(): void {
    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      // filter: true,
      floatingFilter: true,
      resizable: true,
      pagination: true,
      filter: 'agTextColumnFilter'
    };
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}
