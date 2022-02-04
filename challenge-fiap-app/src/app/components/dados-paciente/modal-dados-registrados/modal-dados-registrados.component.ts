import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dados-registrados',
  templateUrl: './modal-dados-registrados.component.html',
  styleUrls: ['./modal-dados-registrados.component.scss'],
})
export class ModalDadosRegistradosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalDadosRegistradosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() { }

  fechar() {
    this.dialogRef.close();
  }

}
