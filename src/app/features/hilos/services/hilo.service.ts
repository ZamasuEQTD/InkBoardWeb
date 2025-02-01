import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { finalize, map, Observable } from 'rxjs';
import { Hilo } from '../interfaces/hilo.interface';
import { ApiResponse } from '../../core/interfaces/api-response.interface';
import { Comentario } from '../../comentarios/interfaces/comentario.interface';
import { ComentariosService } from '../../comentarios/services/comentarios.service';

@Injectable({
  providedIn: 'root'
})
export class HiloService {
  private http = inject(HttpClient)

   

  getHilo(id: string): Observable<Hilo> {
    return this.http
      .get<ApiResponse<Hilo>>(`/api/hilos/${id}`)
      .pipe(
        map((response) => response.data)
      );
  }
}
