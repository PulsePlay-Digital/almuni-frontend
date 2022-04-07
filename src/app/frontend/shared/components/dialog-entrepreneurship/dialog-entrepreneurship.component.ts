import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-entrepreneurship',
  templateUrl: './dialog-entrepreneurship.component.html',
  styleUrls: ['./dialog-entrepreneurship.component.scss']
})
export class DialogEntrepreneurshipComponent implements OnInit {

  constructor(
    public dialogref: MatDialogRef<DialogEntrepreneurshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
