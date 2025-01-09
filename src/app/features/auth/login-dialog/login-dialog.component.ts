import { DialogRef, Dialog } from '@angular/cdk/dialog';
import { Component, inject, signal } from '@angular/core';
import { DialogHeaderComponent } from "../../shared/components/dialog-header/dialog-header.component";
import { DialogComponent } from "../../shared/components/dialog/dialog.component";
import { InputLabeledComponent } from "../../shared/components/input-labeled/input-labeled.component";

@Component({
  selector: 'app-login-dialog',
  imports: [DialogHeaderComponent, InputLabeledComponent],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css',
})
export class LoginDialogComponent {
  inciandoSesion = signal(false)

  dialogRef = inject(DialogRef);

  iniciarSesion() : void {}

  close ():void {
    this.dialogRef.close();
  }
}
