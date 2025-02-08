import { Component, inject, Input } from '@angular/core';
import { Notificacion } from '../../interfaces/notificacion.interface';
import { TiempoTranscurridoPipe } from "../../../core/pipes/tiempoTranscurrido.pipe";
import { RouterModule } from '@angular/router';
import { NotificacionesService } from '../../serivces/notificaciones.service';

@Component({
  selector: 'app-notificacion',
  imports: [TiempoTranscurridoPipe,RouterModule],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css',
})
export class NotificacionComponent {
  @Input() notificacion!: Notificacion;

    private notificacionesService = inject(NotificacionesService);

  leer(id:string){
    this.notificacionesService.leer(id);
  }
}
