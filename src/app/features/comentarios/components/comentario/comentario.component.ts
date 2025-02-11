import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Comentario } from '../../interfaces/comentario.interface';
import { TiempoTranscurridoPipe } from "../../../core/pipes/tiempoTranscurrido.pipe";
import { MediaBoxComponent } from "../../../shared/components/media-box/media-box.component";
import { ColorComentarioComponent } from "../color-comentario/color-comentario.component";
import { CommonModule } from '@angular/common';
import { TextoComponent } from "../texto/texto.component";
import { ColorPicker } from '../../../shared/util/color-picker-util';
import { AutorRolePipe } from "../../../core/pipes/autor_role.pipe";
import { MenuItem } from 'primeng/api';
import { ComentariosService } from '../../services/comentarios.service';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-comentario',
  imports: [
    MenuModule,
    TiempoTranscurridoPipe, MediaBoxComponent, ColorComentarioComponent, CommonModule, TextoComponent, AutorRolePipe],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export class ComentarioComponent {
  @Input() comentario!: Comentario;

  @Output() onTagguear = new EventEmitter<string>()

  @Input() hilo!: string;

  private service = inject(ComentariosService);

  public opciones: MenuItem[] = [
    {
      label: "Denunciar",
    },
    {
      label: "Desactivar notificaciones",
    },

    {
      label: "Ocultar",
      command: () => {
        this.service.ocultar(this.comentario.id, this.hilo).subscribe()
      }
    },
    {
      label: "Destacar",
      command: () => {
        this.service.destacar(this.comentario.id, this.hilo).subscribe();
      }
    },

    {
      label: "Eliminar",
      command: () => {
        this.service.eliminar(this.comentario.id, this.hilo).subscribe();
      }
    },
    {
      label: "Ver usuario",
      command: (event) => {
      }
    }
  ];

  colorTagUnico(): string {
    return ColorPicker.generar(this.comentario.tag_unico!);
  }

  tagguear() {
    this.onTagguear.emit(this.comentario.tag)
  }
}
