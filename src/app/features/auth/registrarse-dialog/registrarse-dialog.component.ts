import { Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import { InputLabeledComponent } from '../../shared/components/input-labeled/input-labeled.component';
import { DialogHeaderComponent } from "../../shared/components/dialog-header/dialog-header.component";
import { DialogRef } from '@angular/cdk/dialog';
import { AuthService} from '../services/auth-service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrarse-dialog',
  imports: [
    InputLabeledComponent,
    DialogHeaderComponent,
    ReactiveFormsModule
],
  templateUrl: './registrarse-dialog.component.html',
  styleUrl: './registrarse-dialog.component.css',
})
export class RegistrarseDialogComponent {

  service = inject(AuthService)

  dialogRef = inject(DialogRef);

  fb = inject(FormBuilder);

  form = this.fb.group({
    username : [''],
    password : [''],
    passwordRepetida : ['']
  });

  close() :void {
    this.dialogRef.close();
  }

  registrarse() {
    this.service.registrarse({
      username: this.form.value.username!,
      password: this.form.value.password!
    })
  }
}
