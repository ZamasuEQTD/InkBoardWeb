import { Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import { InputLabeledComponent } from '../../shared/components/input-labeled/input-labeled.component';
import { DialogHeaderComponent } from "../../shared/components/dialog-header/dialog-header.component";
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-registrarse-dialog',
  imports: [
    InputLabeledComponent,
    DialogHeaderComponent
],
  templateUrl: './registrarse-dialog.component.html',
  styleUrl: './registrarse-dialog.component.css',
})
export class RegistrarseDialogComponent {

  dialogRef = inject(DialogRef);

  constructor() {}

  close() :void {
    this.dialogRef.close();
  }
}
