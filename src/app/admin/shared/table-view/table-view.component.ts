import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input() ColumnDefs: any;  
  @Input() RowData: any;  
  @Input() IsColumnsToFit: boolean | undefined;  
  
  gridApi: any;  
  gridColumnApi: any; 

  constructor() { }

  ngOnInit(): void {    
  }

  onGridReady(params: any) { 
    this.gridApi = params.api;  
    this.gridColumnApi = params.columnApi;  
    params.api.setRowData(this.RowData);  
    if (this.IsColumnsToFit) {  
      this.gridApi.sizeColumnsToFit();  
    }  
  }  
}
