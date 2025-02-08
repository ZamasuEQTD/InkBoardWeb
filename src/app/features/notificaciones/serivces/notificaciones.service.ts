import { effect, inject, Injectable, Injector, signal } from '@angular/core';
import { Notificacion } from '../interfaces/notificacion.interface';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../core/interfaces/api-response.interface';
import { map } from 'rxjs';
import { AuthService } from '../../auth/services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  initialized = false;

  notificaciones = signal<Notificacion[]>([]);

  cantNotificaciones = signal<number>(0);

  cargandoNotificaciones = signal<boolean>(false);

  private readonly auth = inject(AuthService);

  private http = inject(HttpClient);

  constructor(private injector: Injector) {}

  init() {
    effect(
      () => {
        if (!this.auth.autenticado()) {
          this.cantNotificaciones.set(0);

          this.notificaciones.set([]);

          this.initialized = false;
        }
      },
      { injector: this.injector }
    );

    this.cargarNotificaciones();

    this.initialized = true;
  }

  cargarNotificaciones() {
    this.http
      .get<ApiResponse<Notificacion[]>>('/api/notificaciones')
      .pipe(map((response) => response.data))
      .subscribe((notificaciones) =>
        this.notificaciones.update((n) => [...n, ...notificaciones])
      );
  }

  leer(id:string){
    this.http.post(`/api/notificaciones/${id}/leer`, null).subscribe(response => {
      this.notificaciones.update((notis)=> notis.filter(n=> n.id != id))
    });
  }

  leerTodas(){
    this.http.post(`/api/notificaciones/leer`, null).subscribe(response => {
      this.notificaciones.set([]);
    });
  }
}
