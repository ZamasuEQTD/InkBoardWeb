import { inject, Injectable, OnInit, signal, WritableSignal } from '@angular/core';
import { Portada } from '../../portadas/interfaces/portada.interface';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../core/interfaces/api-response.interface';
import { map, finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService  {
  http = inject(HttpClient)


  cargarPortadas():Observable<Portada[]> {
    return this.http.get<ApiResponse<Portada[]>>("http://192.168.2.105:5000/api/hilos/portadas")
    .pipe(
      map((response)=> response.value)
    );
  }
}
