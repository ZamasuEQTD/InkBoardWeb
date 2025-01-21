import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment.development';
import { AuthService } from './features/auth/services/auth-service';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    providers:[],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'InkBoard';

  private auth:AuthService = inject(AuthService)

  constructor(private primeng: PrimeNG) {
    this.primeng.theme.set({
      preset: Aura,
          options: {
            darkModeSelector: '.my-app-dark',
              cssLayer: {
                  name: 'primeng',
                  order: 'tailwind-base, primeng, tailwind-utilities'
              }
          }
      })
  }

  ngOnInit(): void {
    this.auth.restaurarSesion();
  }
}
