import { Component, Input } from '@angular/core';
import { Comentario } from '../../interfaces/comentario.interface';
import { TiempoTranscurridoPipe } from "../../../core/pipes/tiempoTranscurrido.pipe";
import { MediaBoxComponent } from "../../../shared/components/media-box/media-box.component";
import { ColorComentarioComponent } from "../color-comentario/color-comentario.component";

@Component({
  selector: 'app-comentario',
  imports: [TiempoTranscurridoPipe, MediaBoxComponent, ColorComentarioComponent],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export class ComentarioComponent {
  @Input() comentario!:Comentario;
}
