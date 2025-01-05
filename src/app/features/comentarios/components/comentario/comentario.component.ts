import { Component, Input } from '@angular/core';
import { Comentario } from '../../interfaces/comentario.interface';
import { TiempoTranscurridoPipe } from "../../../core/pipes/tiempoTranscurrido.pipe";

@Component({
  selector: 'app-comentario',
  imports: [TiempoTranscurridoPipe],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export class ComentarioComponent {
  @Input() comentario!:Comentario;
}
