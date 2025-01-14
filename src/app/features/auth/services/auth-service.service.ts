import { inject, Injectable, signal } from '@angular/core';
import { CurrentUser } from '../interfaces/current-user.interface';
import { jwtDecode } from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, finalize, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  currentUser = signal<DecodedToken | null>(null);
  accessToken = signal<string | null>(null);
  authenticando = signal<boolean>(false);

  private http = inject(HttpClient);

  restaurarSesion() {
    const token = localStorage.getItem("token");

    if (!token || this.tokenHaExpirado(token)) return;

    this.crearSesion(token);
  }

  login(form: AuthFormData) {
    this.authenticarse("", form).subscribe((token) => {
      this.crearSesion(token);
    });
  }

  registrarse(form: AuthFormData) {
    this.authenticarse("", form).subscribe((token) => {
      this.crearSesion(token);
    });
  }

  logout() {
    this.currentUser.set(null);

    this.accessToken.set(null);

    localStorage.removeItem("token");
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
    const user: DecodedToken = jwtDecode(token);
    this.currentUser.set(user);
    this.accessToken.set(token);
    localStorage.setItem("token", token);
  }

  private tokenHaExpirado(token: string): boolean {
    const decodedToken: DecodedToken = jwtDecode(token);

    return decodedToken.exp * 1000 < Date.now();
  }
}

interface AuthFormData {
  username: string;
  password: string;
}

interface ApiResponse<T> {
  value: T;
  message?: string;
  status?: number;
}

interface DecodedToken {
  sub: string;
  exp: number;
  // Otras propiedades del token
}
