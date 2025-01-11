import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DialogRef, Dialog } from '@angular/cdk/dialog';
import { RegistroComponent } from "../registro/registro.component";
import { BanearUsuarioDialogComponent } from '../../../moderacion/banear-usuario-dialog/banear-usuario-dialog.component';

@Component({
  selector: 'app-registro-usuario-dialog',
  templateUrl: './registro-usuario-dialog.component.html',
  styleUrl: './registro-usuario-dialog.component.css',
  imports: [RegistroComponent],
})
export class RegistroUsuarioDialogComponent {
  dialogRef = inject(DialogRef);

  registroSeleccionado: WritableSignal<'hilos' | 'comentarios'> = signal('hilos')

  dialog =  inject(Dialog)

  close() :void {
    this.dialogRef.close()
  }

  seleccionarRegistro(registro:'hilos' | 'comentarios'):void{
    this.registroSeleccionado.set(registro) ;
  }


  showBanearUsuarioDialog(){
    this.dialog.open(BanearUsuarioDialogComponent);
  }
}

