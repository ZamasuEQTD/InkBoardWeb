import { Component, inject } from '@angular/core';
import { Comentario } from '../../../comentarios/interfaces/comentario.interface';
import { ComentarioComponent } from "../../../comentarios/components/comentario/comentario.component";
import { ComentarioSkeletonComponent } from "../../../comentarios/components/comentario-skeleton/comentario-skeleton.component";
import { ComentarHiloFormComponent } from "../comentar-hilo-form/comentar-hilo-form.component";
import { HiloService } from '../../services/hilo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hilo-comentarios',
  imports: [ComentarioComponent, ComentarioSkeletonComponent, ComentarHiloFormComponent, CommonModule],
  templateUrl: './hilo-comentarios.component.html',
  styleUrl: './hilo-comentarios.component.css',
})
export class HiloComentariosComponent {

  public service = inject(HiloService);

}
