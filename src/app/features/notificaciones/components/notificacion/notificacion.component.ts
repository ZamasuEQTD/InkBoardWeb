import { Component, Input } from '@angular/core';
import { Notificacion } from '../../interfaces/notificacion.interface';
import { TiempoTranscurridoPipe } from "../../../core/pipes/tiempoTranscurrido.pipe";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notificacion',
  imports: [TiempoTranscurridoPipe,RouterModule],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css',
})
export class NotificacionComponent {
  @Input() notificacion!: Notificacion;
}
