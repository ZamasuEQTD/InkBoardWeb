import { inject, Injectable, signal } from '@angular/core';
import { CurrentUser } from '../interfaces/current-user.interface';
import { jwtDecode } from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, finalize, map, throwError } from 'rxjs';
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

  login(form: AuthFormData) {
    this.authenticarse("http://192.168.2.105:5000/api/auth/login", form).subscribe((token) => {
      this.crearSesion(token);
    });
  }

  registrarse(form: AuthFormData) {
    this.authenticarse("http://192.168.2.105:5000/api/auth/registro", form).subscribe((token) => {
      this.crearSesion(token);
    });
  }


  private authenticarse(url: string, form: AuthFormData) {
    this.authenticando.set(true);

    return this.http.post<ApiResponse<string>>(url, form).pipe(
      finalize(() => this.authenticando.set(false)),
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError(() => new Error('Error en la autenticación'));
      }),
      map((response) => response.value)
    );
  }

  private crearSesion(token: string): void {
    const {name,sub, roles} : DecodedToken = jwtDecode(token);

    this.currentUser.set({
      id: sub,
      username: name,
      roles: roles
    });

    console.log(this.currentUser());

    this.accessToken.set(token);

    localStorage.setItem("token", token);
  }
}

interface AuthFormData {
  username: string;
  password: string;
}
