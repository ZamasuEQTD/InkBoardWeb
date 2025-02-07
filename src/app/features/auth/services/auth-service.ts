import { inject, Injectable, signal } from '@angular/core';
import { CurrentUser } from '../interfaces/current-user.interface';
import { jwtDecode } from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, finalize, map, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../../core/interfaces/api-response.interface';
import { DecodedToken } from '../interfaces/decoded-tokent.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = signal<CurrentUser | null>(null);
  accessToken = signal<string | null>(null);
  authenticando = signal<boolean>(false);

  private http = inject(HttpClient);

  restaurarSesion() {
    const token = localStorage.getItem("token");

    if (!token) return;

    this.crearSesion(token);
  }

  logout() {
    this.currentUser.set(null);

    this.accessToken.set(null);

    localStorage.removeItem("token");
  }


  crearSesion(token: string): void {


    const {name,sub, roles} : DecodedToken = jwtDecode(token);

    this.currentUser.set({
      id: sub,
      username: name,
      roles: roles
    });


    this.accessToken.set(token);

    localStorage.setItem("token", token);
  }

  registrarse (form : AuthFormData): Observable<string>{
    return this.http.post<ApiResponse<string>>('/api/auth/registrarse', form).pipe(
      map(response => response.data),
    );
  }

  login (form : AuthFormData): Observable<string>{
    return this.http.post<ApiResponse<string>>('/api/auth/login', form).pipe(
      map(response => response.data),
    );
  }

  
}

interface AuthFormData {
  username: string;
  password: string;
}
