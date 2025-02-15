import { computed, inject, Injectable, signal } from '@angular/core';
import { Comentario } from '../../comentarios/interfaces/comentario.interface';
import { Hilo } from '../interfaces/hilo.interface';
import { HiloService } from './hilo.service';
import { ComentariosService } from '../../comentarios/services/comentarios.service';
import { FormBuilder } from '@angular/forms';
import { PickedMedia } from '../../shared/interfaces/picked-media.interface';
import { TagUtils } from '../../comentarios/utils/tags-utils';

@Injectable({
  providedIn: 'root'
})
export class HiloPageService {

  static cantidadMaximaDeTaggueos = 5;

  hiloService = inject(HiloService);

  comentariosService = inject(ComentariosService);

  hilo = signal<undefined | Hilo>(undefined);

  destacados = signal<Comentario[]>([]);
  comentarios = signal<Comentario[]>([]);

  cargandoComentarios = signal<boolean>(true);

  comentariosDic: { [key: string]: Comentario } = {}

  historialDeComentariosSeleccionado = signal<Comentario[]>([]);

  hayHitorialDeComentarios = computed<boolean>(()=> this.historialDeComentariosSeleccionado().length !== 0);

  constructor() { }

  cargar(id: string, onComentariosCargados?: () => void) {
    this.hiloService.getHilo(id).subscribe((hilo) => {

      this.hilo.set(hilo);

      this.comentariosService
        .getComentariosDeHilo(hilo.id)
        .subscribe((response) => {
          this.destacados.set(response.destacados);
          this.comentarios.set(response.comentarios);
          this.cargandoComentarios.set(false);

          this.comentarios().forEach(c => this.comentariosDic[c.tag] = c);

          if (onComentariosCargados) {
            onComentariosCargados();
          }
        });
    });
  }

  reiniciar() {
    this.hilo.set(undefined);
    this.comentarios.set([]);
    this.destacados.set([]);
  }
}
