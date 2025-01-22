import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { finalize, map, Observable } from 'rxjs';
import { Hilo } from '../interfaces/hilo.interface';
import { ApiResponse } from '../../core/interfaces/api-response.interface';
import { Comentario } from '../../comentarios/interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class HiloService {
  hilo = signal<Hilo | null> (null);
  hiloIsLoading = signal<boolean>(false);

  comentarios = signal<Comentario[]>([])
  isComentariosLoading = signal<boolean>(false);

  private http = inject(HttpClient)

  cargarHilo(id:string) :void {
    this.hiloIsLoading.set(true);

    var obs = this.http
    .get<ApiResponse<Hilo>>(`/api/hilos/${id}`)
    .pipe(
      map(
        (response) => response.data
      )
    )

    obs
    .pipe(
      finalize(
        () => {
          this.hiloIsLoading.set(false)
        }
      )
    )
    .subscribe((hilo) => {
      this.hilo.set(hilo)
    })
  }
}
