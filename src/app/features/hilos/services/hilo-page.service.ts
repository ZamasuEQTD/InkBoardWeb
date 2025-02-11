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

  private _destacados = signal<Comentario[]>([]);
  private _comentarios = signal<Comentario[]>([]);

  comentarios = computed<Comentario[]>(() => [...this._destacados(), ...this._comentarios()]);

  cargandoComentarios = signal<boolean>(true);


  constructor() { }

  cargar(id: string) {
    this.hiloService.getHilo(id).subscribe((hilo) => {

      this.hilo.set(hilo);

      this.comentariosService
        .getComentariosDeHilo(hilo.id)
        .subscribe((response) => {
          this._destacados.set(response.destacados);
          this._comentarios.set(response.comentarios);
          this.cargandoComentarios.set(false);
        });
    });
  }

  reiniciar() {
    this.hilo.set(undefined);
    this._comentarios.set([]);
    this._destacados.set([]);

  }
}
