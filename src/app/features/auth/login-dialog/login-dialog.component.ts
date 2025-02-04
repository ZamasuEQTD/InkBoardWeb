import { DialogRef, Dialog } from '@angular/cdk/dialog';
import { Component, inject, signal } from '@angular/core';
import { DialogHeaderComponent } from '../../shared/components/dialog-header/dialog-header.component';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { InputLabeledComponent } from '../../shared/components/input-labeled/input-labeled.component';
import { AuthService } from '../services/auth-service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  imports: [InputLabeledComponent, DialogComponent, ReactiveFormsModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css',
})
export class LoginDialogComponent {
  inciandoSesion = signal(false);

  dialogRef = inject(DialogRef);

  authService = inject(AuthService);

  fb = inject(FormBuilder);

  form = this.fb.group({
    username: [''],
    password: [''],
  });

  close(): void {
    this.dialogRef.close();
  }

  login() {
    this.authService
      .login({
        password: this.form.value.password!,
        username: this.form.value.username!,
      })
      .subscribe((token) => {
        this.close();

        this.authService.crearSesion(token)
      });
  }
}
