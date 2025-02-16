import { Component, Inject, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { DialogRef, Dialog, DIALOG_DATA } from '@angular/cdk/dialog';
import { RegistroComponent } from "../registro/registro.component";
import { BanearUsuarioDialogComponent } from '../../../moderacion/banear-usuario-dialog/banear-usuario-dialog.component';
import { DialogComponent } from "../../../shared/components/dialog/dialog.component";
import { Registro, UsuarioRegistro } from '../../interfaces/registro.interface';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../../core/interfaces/api-response.interface';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-usuario-dialog',
  templateUrl: './registro-usuario-dialog.component.html',
  styleUrl: './registro-usuario-dialog.component.css',
  imports: [RegistroComponent, DialogComponent, CommonModule],
})
export class RegistroUsuarioDialogComponent implements OnInit {

  dialogRef = inject(DialogRef);

  private http = inject(HttpClient)

  registroSeleccionado: WritableSignal<'hilos' | 'comentarios'> = signal('hilos')

  usuario = signal<UsuarioRegistro | undefined>(undefined);

  hilosPosteados = signal<Registro[]>([]);

  hilosComentados = signal<Registro[]>([]);

  dialog = inject(Dialog)


  constructor(
    @Inject(DIALOG_DATA) public data: {
      usuario: string
    }
  ) { }

  ngOnInit(): void {

    this.http.get<ApiResponse<UsuarioRegistro>>(`/api/registros/usuario/${this.data.usuario}`)
      .pipe(map(r => r.data)).subscribe(data => {
        this.usuario.set(data);
      
        var response = this.http.get<ApiResponse<Registro[]>>(`/api/registros/hilos-posteados/usuario/${this.data.usuario}`)

        response.pipe(
          map(r => r.data)
        ).subscribe(registros => {
          this.hilosPosteados.update(r => [...r, ...registros])
        })
    
    
        var response = this.http.get<ApiResponse<Registro[]>>(`/api/registros/comentarios/usuario/${this.data.usuario}`)
    
        response.pipe(
          map(r => r.data)
        ).subscribe(registros => {
          this.hilosComentados.update(r => [...r, ...registros])
        })
      }
    );
    
   
  }

  close(): void {
    this.dialogRef.close()
  }

  seleccionarRegistro(registro: 'hilos' | 'comentarios'): void {
    this.registroSeleccionado.set(registro);
  }


  showBanearUsuarioDialog() {
    this.dialog.open(BanearUsuarioDialogComponent);
  }
}

