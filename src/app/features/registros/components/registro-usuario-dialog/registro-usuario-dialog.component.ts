import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DialogHeaderComponent } from "../../../shared/components/dialog-header/dialog-header.component";
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-registro-usuario-dialog',
  templateUrl: './registro-usuario-dialog.component.html',
  styleUrl: './registro-usuario-dialog.component.css',
  imports: [],
})
export class RegistroUsuarioDialogComponent {
  dialogRef = inject(DialogRef);

  registroSeleccionado: WritableSignal<'hilos' | 'comentarios'> = signal('hilos')

  close() :void {
    this.dialogRef.close()
  }

  seleccionarRegistro(registro:'hilos' | 'comentarios'):void{

    this.registroSeleccionado.set(registro) ;
  }
}

