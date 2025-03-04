import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { CurrentUser } from '../interfaces/current-user.interface';
import { jwtDecode } from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../core/interfaces/api-response.interface';
import { DecodedToken } from '../interfaces/decoded-tokent.interface';

const AUTH_KEY = "token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = signal<CurrentUser | undefined>(undefined);

  accessToken = signal<string | undefined>(loadToken());

  autenticado = computed<boolean>(() => this.currentUser() != null);

  authenticando = signal<boolean>(false);

  private http = inject(HttpClient);

  createUserFromToken = effect(() => {
    if (this.accessToken()) {

      const { name, sub, role }: DecodedToken = jwtDecode(this.accessToken()!);

      this.currentUser.set({
        id: sub,
        username: name,
        role: role
      });
    }
  });

  get isModerador(): boolean {
    return this.currentUser()?.role.includes("Moderador") ? true : false;
  }

  logout(): void {
    this.currentUser.set(undefined);

    this.accessToken.set(undefined);

    localStorage.removeItem(AUTH_KEY);
  }

  crearSesion(token: string): void {
    this.accessToken.set(token);

    localStorage.setItem("token", token);
  }

  registrarse(form: AuthFormData): Observable<string> {
    return this.http.post<ApiResponse<string>>('/api/auth/registrarse', form).pipe(
      map(response => response.data),
    );
  }

  login(form: AuthFormData): Observable<string> {
    return this.http.post<ApiResponse<string>>('/api/auth/login', form).pipe(
      map(response => response.data),
    );
  }
}

interface AuthFormData {
  username: string;
  password: string;
}

function loadToken(): string | undefined {
  const token = localStorage.getItem(AUTH_KEY);

  return token ? token : undefined;
}