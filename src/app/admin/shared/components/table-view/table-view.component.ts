import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridOptions } from 'ag-grid-community';
import { DialogMaterialComponent } from '../dialog-material/dialog-material.component';
import { ToolsRendererComponent } from './tools-renderer/tools-renderer.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input() columnDefs: any;  
  @Input() RowData: any;  
  @Input() IsColumnsToFit: boolean | undefined;  
  @Input() rowSelection: string = 'multiple'
  @Input() config: any = {
    hideTools: true,
    hideAction: true,
    showAllDisable: true,
    edit: true
  };
  @Input() edit = false;
  @Input() hideTools = false;
  @Input() showAllDisable = false;
  @Input() hideAction = true;
  @Output() onRowEdit = new EventEmitter<number>();
  
  gridApi: any;  
  gridColumnApi: any; 
  public context: any;
  public frameworkComponents: any;
  public defaultColDef: any;
  displayedColumns: any;
  

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {    
    this.context = { componentParent: this };
    this.defaultColDef = {
      sortable: true,
      resizeable: true,
      floatingFilter: true,
      wrapText: true,
      filter: 'agTextColumnFilter'
    };
    this.frameworkComponents = {
      tools: ToolsRendererComponent
    };
    this.buildColumnList();
  }

  onGridReady(params: any) { 
    this.gridApi = params.api;  
    this.gridColumnApi = params.columnApi; 
    this.gridApi.showLoadingOverlay(); 
    setTimeout(() => {
      params.api.setRowData(this.RowData);  
    }, 1500);
    if (this.IsColumnsToFit) {  
      this.gridApi.sizeColumnsToFit();  
    }  
  }  

  rowEdit(rowid: number, params?: any) {
    if (params) {
      this.onRowEdit.emit(params);
    } else {
      this.onRowEdit.emit(rowid);
    }
  }


   /**
   * Build the column list of the table
   */
    private buildColumnList() {
      this.displayedColumns = [];
      if (this.hideTools === false) {
        this.displayedColumns.push('tools');
      }
  
      if (this.showAllDisable) {
        this.displayedColumns.push('enabled');
      }
  
      for (let i = 0; i < this.columnDefs.length; i++) {
        this.displayedColumns.push(this.columnDefs[i].field);
      }
  
      if (this.hideAction === false) {
        this.displayedColumns.push('action');
      }
    }
  
}
