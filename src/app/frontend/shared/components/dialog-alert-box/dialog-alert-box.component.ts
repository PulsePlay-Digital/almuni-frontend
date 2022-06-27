import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alert-box',
  templateUrl: './dialog-alert-box.component.html',
  styleUrls: ['./dialog-alert-box.component.scss']
})
export class DialogAlertBoxComponent implements OnInit {

  constructor(
    private dialogref: MatDialogRef<DialogAlertBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
