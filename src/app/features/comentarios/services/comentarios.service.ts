import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario.interface';
import { ApiResponse } from '../../core/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  http = inject(HttpClient)

  getComentariosDeHilo(hilo : string): Observable<Comentario[]> {
    return this.
      http.get<ApiResponse<Comentario[]>>(`/api/comentarios/hilo/${hilo}`).
      pipe(
        map((response)=> response.data)
      );
  }
}
