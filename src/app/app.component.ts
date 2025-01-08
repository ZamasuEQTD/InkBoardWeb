import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { DialogService } from 'primeng/dynamicdialog';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RegistrarseDialogComponent } from './features/auth/registrarse-dialog/registrarse-dialog.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    providers:[DialogService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InkBoard';

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
}
