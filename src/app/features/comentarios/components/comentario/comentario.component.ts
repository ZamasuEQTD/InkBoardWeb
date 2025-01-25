import { Component, inject, Input } from '@angular/core';
import { Comentario } from '../../interfaces/comentario.interface';
import { TiempoTranscurridoPipe } from "../../../core/pipes/tiempoTranscurrido.pipe";
import { MediaBoxComponent } from "../../../shared/components/media-box/media-box.component";
import { ColorComentarioComponent } from "../color-comentario/color-comentario.component";
import { CommonModule } from '@angular/common';
import { HiloService } from '../../../hilos/services/hilo.service';
import { ComentarHiloService } from '../../../hilos/services/comentar-hilo.service';

@Component({
  selector: 'app-comentario',
  imports: [TiempoTranscurridoPipe, MediaBoxComponent, ColorComentarioComponent, CommonModule],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export class ComentarioComponent {
  @Input() comentario!:Comentario;

  ComentarHiloService = inject(ComentarHiloService);

  tagguear(){
    this.ComentarHiloService.tagguear(this.comentario.tag);
  }
}
