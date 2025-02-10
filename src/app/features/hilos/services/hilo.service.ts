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

  eliminar(id:string) :Observable<void> {
    return this.http.delete<void>(`/api/hilos/eliminar/${id}`);
  }

  establecerSticky(id:string) :Observable<void> {
    return this.http.post<void>(`/api/hilos/establecer-sticky/${id}`,null);
  }

  eliminarSticky(id:string) :Observable<void> {
    return this.http.delete<void>(`/api/hilos/eliminar-sticky/${id}`);
  }

  ocultar(id:string) :Observable<void>{
    return this.http.post<void>(`/api/hilos/colecciones/ocultos/ocultar/${id}`,null);
  }

  seguir(id:string) :Observable<void>{
    return this.http.post<void>(`/api/hilos/colecciones/seguidos/seguir/${id}`,null);
  }

  ponerEnFavoritos(id:string) :Observable<void>{
    return this.http.post<void>(`/api/hilos/colecciones/favoritos/poner-en-favoritos/${id}`,null);
  }
}
