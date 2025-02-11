import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comentario, ComentariosHilo } from '../interfaces/comentario.interface';
import { ApiResponse } from '../../core/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  http = inject(HttpClient)

  getComentariosDeHilo(hilo : string): Observable<ComentariosHilo> {
    return this.
      http.get<ApiResponse<ComentariosHilo>>(`/api/comentarios/hilo/${hilo}`).
      pipe(
        map((response)=> response.data)
      );
  }

  comentarHilo(hilo : string,  data: FormData): Observable<void> {
    return this.http.post<void>(`/api/comentarios/comentar-hilo/${hilo}`,data);
  }

  eliminar(id:string, hilo:string) : Observable<void> {
    return this.http.delete<void>(`/api/comentarios/hilo/${hilo}/eliminar/comentario/${id}`);
  }

  destacar(id:string,hilo:string) : Observable<void> {
    return this.http.post<void>(`/api/comentarios/hilo/${hilo}/destacar/comentario/${id}`,null);
  }

  ocultar(id:string,hilo:string) : Observable<void> {
    return this.http.post<void>(`/api/comentarios/hilo/${hilo}/ocultar/comentario/${id}`,null);
  }
}
