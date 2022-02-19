import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToolsRendererComponent } from './components/table-view/tools-renderer/tools-renderer.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DialogMaterialComponent } from './components/dialog-material/dialog-material.component';
import { MatExpansionModule } from '@angular/material/expansion';
 
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableViewComponent,
    LoaderComponent,
    ToolsRendererComponent,
    DialogMaterialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatExpansionModule,
    AgGridModule.withComponents([
      ToolsRendererComponent
    ])
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableViewComponent,
    LoaderComponent,
    ToolsRendererComponent,
    DialogMaterialComponent
  ],
  entryComponents: [
    DialogMaterialComponent
  ]
})
export class SharedModule { }
